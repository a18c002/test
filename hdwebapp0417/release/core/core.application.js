define("core/application",["leaflet","leaflet/fix","core/namespace","core/baseobject","core/map","core/pool","data/ajax","data/localStorage","data/sessionStorage","func/base","layout/base","layout/menu","layout/toppanel","util/base","func/userLogin"],function(e){e.ICT.Application=e.ICT.BaseObject.extend({pool:null,util:null,menu:null,ictmap:null,localStorage:null,sessionStorage:null,toppanel:null,options:{},initialize:function(t){try{this.options=t,this.pool=new e.ICT.Pool,this.util=new e.ICT.Util.Base,this.localStorage=new e.ICT.LocalStorage,this.sessionStorage=new e.ICT.SessionStorage,this.toppanel=new e.ICT.Layout.TopPanel,this.menu=new e.ICT.Menu}catch(n){console.error(n.message)}},init:function(){if(this.sessionStorage.getItem("userInfo")!==null){var t=e.ICT.Func.UserLogin.getInstance();t.afterLoginFunc()}e.ICT.Func.Languages.run(),this.ictmap=new e.ICT.Map(this.options)}})});