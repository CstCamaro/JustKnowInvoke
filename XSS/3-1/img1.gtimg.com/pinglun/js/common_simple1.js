
try
{
	document.domain = "qq.com";
}
catch (e)
{
}

window.debug = false;

var Comment = new Object();

Comment.Configure = {
	version: "1.1",
	author: "colin&hobo",
	newline: "\n",
	statusBar: true,
	default_reply_per_page: 2,
	index_domain: "http://comment1.qq.com/"
};

Comment.ContentFormat = {
	decode: function(content)
	{
		return content.split(Comment.Configure.newline);
	},

	faceEncode: function(content)
	{
		return content.replace(/\[a(\d)\]/ig, "<img src='images/face/$1.gif'/>");
	}
};

Comment.UrlFactory = {
	commentUrlFormatStr: Comment.Configure.index_domain + "{0}/normal/{1}/{2}.htm{3}",
	replyUrlFormatStr: Comment.Configure.index_domain + "{0}/normal/{1}/reply/{2}.htm{3}",
	replySumUrlFormatStr: Comment.Configure.index_domain + "{0}/normal/{1}/reply/{2}/sum.htm{3}",

	getCacheString: function(cache)
	{
		return cache ? "?cache="+Math.random() : "";
	},

	getCommentDir: function(id)
	{
		var path = parseInt(id / 1000000) + '/';
		path += parseInt(id / 1000) + '/';
		path += id / 1;
		return path;
	},

	getCommentSumUrl: function(site, id, nocache)
	{
		return String.format(this.commentUrlFormatStr,
			site, this.getCommentDir(id), "sum", this.getCacheString(nocache));
	},

	getCommentInfoUrl: function(site, id, nocache)
	{
		return String.format(this.commentUrlFormatStr,
			site, this.getCommentDir(id), "commentinfo", this.getCacheString(nocache));
	},


	getCommentOriginIndexUrl: function(site, id, nocache)
	{
		return String.format(this.commentUrlFormatStr,
			site, this.getCommentDir(id), "originindex/00000", this.getCacheString(nocache));
	},

	getReplyDir: function(key)
	{
		try
		{
			var path = key.substr(0, 8);
			path += '/' + (key.substr(8, 4));
			path += '/' + (key.substr(12, 2));
			path += '/' + key;
			return path;
		}
		catch (e)
		{
			return null;
		}
	},

	getReplyInfoUrl: function(site, id, key, nocache)
	{
		return String.format(this.replyUrlFormatStr,
			site, this.getCommentDir(id), this.getReplyDir(key), this.getCacheString(nocache));
	},

	getReplySumUrl: function(site, id, key, nocache)
	{
		return String.format(this.replySumUrlFormatStr,
			site, this.getCommentDir(id), this.getReplyDir(key), this.getCacheString(nocache));
	}
};

Comment.DataObjectFactory = function(content, model)
{
	content = Comment.ContentFormat.decode(content);
	var dataModel = Comment.DataObject[model];
	var dataObject = {};

	for (var i=0; i<dataModel.length; i++)
	{
		dataObject[dataModel[i]] = content[i];
	}

	return dataObject;
};

Comment.DataObject = {
	'commentinfo': [
		'site_cn',
		'sort_en',
		'sort_cn',
		'source',
		'source_url',
		'title',
		'url',
		'intro',
		'intro_img',
		'group_id',
		'intro_show',
		'create_time',
		'debate_id'
	],
	"sum": [
		"origin_count",
		"total_count",
		"top_count"
	],
	'reply': [
		'comment_id',
		'uin',
		'nickname',
		'pub_time',
		'pass_time',
		'ip',
		'title',
		'content',
		'reply_key',
		'is_del',
		'reply_type',
		'reply_kind',
		'tips'
	],
	'pksum': [
		'agree',
		'disagree',
		'middle'
	]
};



Array.prototype.removeAt = function(i)
{
	this.splice(i, 1);
};

Array.prototype.remove = function(o)
{
	var i = this.indexOf(o);
	
	if (i != -1)
	{
		this.splice(i, 1);
	}
};

Comment.StatusBar = {
	show: function(s)
	{
		if (Comment.Configure.statusBar)
		{
			if (!$("loading"))
			{
				divLoading = $C('div');
				divLoading.id = 'loading';
				divLoading.style.position = "absolute";
				divLoading.style.backgroundColor = "#DEA94F";
				divLoading.style.display = "none";
				divLoading.style.padding = "2px 5px";
				divLoading.style.color = "#FFF";
				document.getElementsByTagName('body')[0].appendChild(divLoading);
			}


			$("loading").innerHTML = "���ݼ�����...";
			$("loading").style.top = (document.documentElement.scrollTop || document.body.scrollTop) + "px";
			$("loading").style.left = (document.documentElement.scrollLeft || document.body.scrollLeft) + "px";
			$("loading").style.display = "block";
		}
	},

	hide: function()
	{
		try
		{
			$("loading").style.display = "none";
		}
		catch (e)
		{
		}
	}
};



var retry = false;



Comment.Post = {
	_site: null,
	_id: null,
	init: function(site, id)
	{
		Comment.Post._site = site;
		Comment.Post._id = id;
		$("c_site").value = site;
		$("c_id").value = id;
	},



	callback: function(url)
	{
		$('post_async').src = 'about:blank';
		Comment.StatusBar.hide();
		var code = new UrlParser(url).getParam("code");
		if (code == "-")
		{
			code = -1;
		}
		this.doAlert(parseInt(code));
	},

	doAlert: function(code)
	{
		var errMsg = '';

		switch (code)
		{
			case -1:
				errMsg = '���ύ��ˣ���л���Ĳ���';
				break;
			case 0:
				errMsg = '�ύ�ɹ�����л���Ĳ���';
				window.location.reload();
				break;
			case 1:
				errMsg = '�ܱ�Ǹ������д�����ݲ�������������������������';
				break;
			case 2:
				errMsg = '�ܱ�Ǹ������δ��¼���¼�Ѿ����ڣ����ȵ�¼';
				break;
			case 3:
				errMsg = '�����������ύ��ˣ���л���Ĳ���';
				break;
			case 4:
				errMsg = '����IP��ַ����ʱ������';
				break;
			case 5:
				errMsg = '����QQ������ʱ��ֹ�ڱ�����ϵͳ����';
				break;
			case 6:
				errMsg = '�ܱ�Ǹ������QQ��������벻ƥ��';
				break;
			case 7:
				errMsg = '�ܱ�Ǹ��ϵͳ��æ�����Ժ�����';
				break;
			case 8:
				errMsg = '�ܱ�Ǹ���������Ƶ��̫�죬���Ժ�����';
				break;
			case 9:
				errMsg = '�ܱ�Ǹ��������֤���������';
				break;
			case 10:
				break;
			case 100:
				errMsg = '���ύ��ˣ���л���Ĳ���';
				break;
		}

		if (errMsg != '')
		{
			alert(errMsg);
		}
	}
};/*  |xGv00|8d473848bdff5c97e50f19b1f2ddf5e4 */