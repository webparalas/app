

   	// livechat by www.mylivechat.com/  2018-06-12

   	


	   MyLiveChat.Version =3007;
	   MyLiveChat.FirstRequestTimeout =28800;
	   MyLiveChat.NextRequestTimeout =57600;
	   MyLiveChat.SyncType ="VISIT";
	   MyLiveChat.SyncStatus ="READY";
	   MyLiveChat.SyncUserName ="Guest_70a7245e";
	   MyLiveChat.SyncResult =null;
	   MyLiveChat.HasReadyAgents =false;
	   MyLiveChat.SourceUrl ="https://guiapdf.online/mexico/terminos.html";
	   MyLiveChat.AgentTimeZone = parseInt("2" || "-5");
	   MyLiveChat.VisitorStatus ="VISIT";
	   MyLiveChat.UrlBase ="https://a7.mylivechat.com/livechat2/";
	   MyLiveChat.SiteUrl ="https://a7.mylivechat.com/";

   	

	   if (!MyLiveChat.AgentId) MyLiveChat.AgentId = MyLiveChat.RawAgentId;

	   MyLiveChat.Departments = [];

	   MyLiveChat.Departments.push({
		   Name:"Support",
		   Agents: [{
			   Id:'User:1',
			   Name:"admin",
			   Online:false
   			}],
		   Online:false
   		});



	   MyLiveChat.VisitorUrls = [];



   	


	   MyLiveChat.VisitorLocation ="AR|Argentina|||";
	   MyLiveChat.LastLoadTime = new Date().getTime();
	   MyLiveChat.VisitorDuration =29;
	   MyLiveChat.VisitorEntryUrl ="file:///C:/Users/54112/Desktop/Hackear%20Whatsapp/www.guiapdf.online/mexico/terminos.html";
	   MyLiveChat.VisitorReferUrl =null;

	   MyLiveChat.VisitorUrls = [];



   	
	   MyLiveChat.VisitorUrls.push("file:///C:/Users/54112/Desktop/Hackear%20Whatsapp/www.guiapdf.online/mexico/terminos.html");
   	
	   MyLiveChat.VisitorUrls.push("https://guiapdf.online/mexico/terminos.html");
   	

	   MyLiveChat_Initialize();

	   if (MyLiveChat.localStorage || MyLiveChat.userDataBehavior) {
		   MyLiveChat_SyncToCPR();
	   }

   	