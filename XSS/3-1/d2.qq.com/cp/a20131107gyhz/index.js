			     amsCfg_baselottery_6615={
					'isQueryRole' : false, //���̵Ĵ����ͽ�ɫ��Դ�뵽AMS������
					'onBeginGetGiftEvent' : function(){
						return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
					},
					'onGetGiftFailureEvent' : function(callbackObj,failedRet){// �齱ʧ���¼�
						alert(callbackObj.sMsg);
						//failedRet ��ϸ������˵��
					},
					'onGetGiftSuccessEvent' : function(callbackObj,failedRet){// �齱�ɹ��¼�
						//failedRet ��ϸ������˵��
						if(!callbackObj.sPackageName){
							LotteryManager.alert(callbackObj.sMsg);
							return;
						}
						//2��cdkey
						if(callbackObj.iPackageType == 2)
						{
								LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
										return;
						}
						//1��ʵ��
						var isRealGoods = false;
						if(callbackObj.iPackageType == 1){
							/*
							 * 0��������Ϸ��Ʒ
							 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
							 * 2��cdkey
							 */
							isRealGoods = true;
						}
						var str = "��ϲ������� " + callbackObj.sPackageName + " !";
						if(isRealGoods){
							str += "����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����";
							// �˴�����û���д������Ϣ�ĺ�������

						}else{
							str += "����ע����գ�";
						}
						LotteryManager.alert(str);
						return;
					}
			  
			  }
			  
			    milo.ready(function(){		
					// �齱��ȡ�����ܳ�ʼ��
					amsCfg_43455 = milo.base.extend(amsCfg_baselottery_6615, {
						'iAMSActivityId' : '5650', // AMS���
						'activityId' : '6615' // ģ��ʵ����
					});    
					// �齱��ȡ�����ܳ�ʼ��
					amsCfg_43470 = milo.base.extend(amsCfg_baselottery_6615, {
						'iAMSActivityId' : '5650', // AMS���
						'activityId' : '6615' // ģ��ʵ����
					});    
					// �齱��ȡ�����ܳ�ʼ��
					amsCfg_43471 = milo.base.extend(amsCfg_baselottery_6615, {
						'iAMSActivityId' : '5650', // AMS���
						'activityId' : '6615' // ģ��ʵ����
					});    
					// �齱��ȡ�����ܳ�ʼ��
					amsCfg_43473 = milo.base.extend(amsCfg_baselottery_6615, {
						'iAMSActivityId' : '5650', // AMS���
						'activityId' : '6615' // ģ��ʵ����
					});    
				});

			
/*  |xGv00|83134c2d83e8d7c7ee13263cc8c3bf0d */