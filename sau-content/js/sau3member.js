// -----------------------------------------------------  
//     ____    ______  __  __             __     
//    /\  _`\ /\  _  \/\ \/\ \          /'__`\   
//    \ \,\L\_\ \ \L\ \ \ \ \ \  __  __/\_\L\ \  
//     \/_\__ \\ \  __ \ \ \ \ \/\ \/\ \/_/_\_<_ 
//       /\ \L\ \ \ \/\ \ \ \_\ \ \ \_/ |/\ \L\ \
//       \ `\____\ \_\ \_\ \_____\ \___/ \ \____/
//        \/_____/\/_/\/_/\/_____/\/__/   \/___/                                            
// -----------------------------------------------------      
//  SAU v3  Hecho por Jose de Jesus Herrera Mata
//  http://www.jhcodes.com/ - jesuxherrerajhcodes.com                                  
// -----------------------------------------------------       
function checklikes(a){var b="process=4&post="+a,c=$("#like-count-"+a);
$.ajax({
	type:"POST",
	url:"postpub",
	data:b,beforeSend:function(){
		c.removeClass("animated flash")
	},success:function(a){
		c.html(a+" Me Gusta").addClass("animated flash")
	},error:function(){

	}})
}$(".commentthis").on("click",function(){
	var a=$(this).attr("data-comment"),a=$("#comment-"+a);a.is(":visible")?a.fadeOut():a.fadeIn()
});
$(".likethis").on("click",function(){
	var a=$(this).attr("data-like"),b=$(this).parent();

	$.ajax({
		type:"POST",
		url:"postpub",
		data:"process=2&like="+a,beforeSend:function(){

		},success:function(a){},error:function(){

		}});
	checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")
});$(".dontlikethis").on("click",function(){var a=$(this).attr("data-like"),b=$(this).parent();



$.ajax({
	type:"POST",
	url:"postpub",
	data:"process=3&like="+a,beforeSend:function(){

	},success:function(a){},error:function(){

	}});checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".deletepost").on("click",function(){var a=$(this).attr("data-post"),b=$("#time-post-"+a);$(this).addClass("animated zoomOut");


$.ajax({
	type:"POST",
	url:"postpub",
	data:"process=5&delete="+a,beforeSend:function(){
		b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')
	},success:function(){
		b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)
	},error:function(){

	}})});$(".deletecomment").on("click",function(){var a=$(this).attr("data-comment"),b=$("#time-comment-"+a);$(this).addClass("animated zoomOut");

	$.ajax({
		type:"POST",
		url:"postpub",
		data:"process=6&delete="+a,beforeSend:function(){
			b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})});
$(".posterbtn").on("click",function(){
	jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#poster");
	
	a.validate({rules:{posttext:"required"},messages:{posttext:messageerror1}});1==a.valid()&&($("#noposts").hide(),a="process=1&"+$("#poster").serialize(),

		$.ajax({type:"POST",
			url:"postpub",
			data:a,
			beforeSend:function(){
			$(".posterbtn").prop("disabled",!0)
			},
				success:function(a){
					debugger;
					$("#poster")[0].reset();
					$(".posterbtn").prop("disabled",!1);
					$("#post-inner").prepend(a);$(".commentthis").on("click",function(){
						var a=$(this).attr("data-comment"),a=$("#comment-"+a);a.is(":visible")?a.fadeOut():a.fadeIn()
					});
					$(".btncommentpost").on("click",function(){
						var a=$(this).attr("data-comment");jQuery.validator.setDefaults({debug:!0,success:"valid"});
						var b=$("#commentfrm"+a);
						b.validate({errorElement:"div",errorPlacement:function(b,d){
							$("div#commenterror"+a).html("");b.appendTo("div#commenterror"+a)
						},rules:{commentstext:"required"},messages:{commentstext:messageerror2}
					});1==b.valid()&&(b=$("#commentfrm"+a).serialize(),
					

					
					$.ajax({
						type:"POST",
						url:"postcomment",
						data:"process=1&post="+a+"&"+b,beforeSend:function(){
							debugger;
						$(".btncommentpost").prop("disabled",!0)},success:function(b){
							$("#commentfrm"+a)[0].reset();$(".btncommentpost").prop("disabled",!1);$("#comment-box-real-"+a).prepend(b);$(".deletecomment").on("click",function(){var a=$(this).attr("data-comment"),b=$("#time-comment-"+a);$(this).addClass("animated zoomOut");

								$.ajax({
									type:"POST",
									url:"postpub",
									data:"process=6&delete="+a,beforeSend:function(){
										b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}
									})})
						},error:function(){

						}}))
					});$(".likethis").on("click",function(){
						var a=$(this).attr("data-like"),b=$(this).parent();
						
						

						$.ajax({
							type:"POST",
							url:"postpub",
							data:"process=2&like="+a,beforeSend:function(){

							},success:function(a){

							},error:function(){}
						});
						checklikes(a);
						b.find("a").removeClass("hidelike");$(this).addClass("hidelike")
					});$(".dontlikethis").on("click",function(){var a=$(this).attr("data-like"),b=$(this).parent();



					$.ajax({type:"POST",url:"postpub",data:"process=3&like="+a,beforeSend:function(){},success:function(a){},error:function(){}});checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".deletepost").on("click",function(){var a=$(this).attr("data-post"),b=$("#time-post-"+a);$(this).addClass("animated zoomOut");


					$.ajax({type:"POST",url:"postpub",data:"process=5&delete="+a,beforeSend:function(){b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})})
				},error:function(){}})
		)});
$(".btncommentpost").on("click",function(){var a=$(this).attr("data-comment");jQuery.validator.setDefaults({debug:!0,success:"valid"});var b=$("#commentfrm"+a);b.validate({errorElement:"div",errorPlacement:function(b,d){$("div#commenterror"+a).html("");b.appendTo("div#commenterror"+a)},rules:{commentstext:"required"},messages:{commentstext:messageerror2}});1==b.valid()&&(b=$("#commentfrm"+a).serialize(),
	$.ajax({type:"POST",url:"postcomment",data:"process=1&post="+a+"&"+b,beforeSend:function(){$(".btncommentpost").prop("disabled",!0)},success:function(b){$("#commentfrm"+a)[0].reset();$(".btncommentpost").prop("disabled",!1);$("#comment-box-real-"+a).prepend(b);$(".deletecomment").on("click",function(){var a=$(this).attr("data-comment"),b=$("#time-comment-"+a);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=6&delete="+a,beforeSend:function(){b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})})},error:function(){}}))});$(".changenowimg").on("click",function(){$("#changeprofile").click()});$("#changeprofile").change(function(){pesoimg=this.files[0].size;if(2<(pesoimg/1048576).toFixed(2))$("#alertimg").show(),setTimeout(function(){$("#alertimg").fadeOut(1E3)},3E3),$(this).val("");else{var a=new FormData($("#profileserialize")[0]);$.ajax({url:"uploadimg",type:"POST",data:a,cache:!1,contentType:!1,processData:!1,beforeSend:function(){$(".profile-image").addClass("opacityimg");$(".profile-image").parent().prepend('<div id="loadingimg"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(a){1==a?($("#alertimg").show(),setTimeout(function(){$("#alertimg").fadeOut(1E3)},3E3)):($(".profile-image").attr("src",a),$(".profile-image").removeClass("opacityimg"),$("#loadingimg").remove());$(this).val("")},error:function(){}})}});$(".addcontact").on("click",function(){var a=$(this).attr("data-contact"),b=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=7&contact="+a,beforeSend:function(){b.prepend('<div id="loadingimg"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){setTimeout(function(){$("#loadingimg").remove()},1E3)},error:function(){}});b.find("button").removeClass("hidebtncontact");$(this).addClass("hidebtncontact")});$(".delcontact").on("click",function(){var a=$(this).attr("data-contact"),b=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=8&contact="+a,beforeSend:function(){b.prepend('<div id="loadingimg"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){setTimeout(function(){$("#loadingimg").remove()},1E3)},error:function(){}});b.find("button").removeClass("hidebtncontact");$(this).addClass("hidebtncontact")});$(".sendmessanow").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#sendmessageprofile");a.validate({rules:{asunto:"required",mensaje:"required"},messages:{asunto:messageerror1,mensaje:messageerror1}});1==a.valid()&&(a="process=9&"+$("#sendmessageprofile").serialize(),$.ajax({type:"POST",url:"postpub",data:a,beforeSend:function(){$("#sendmessageprofile").hide()},success:function(a){$("#sendmessageprofile").show();$("#sendmessageprofile")[0].reset();$("#MessageModal").modal("toggle")},error:function(){}}))});$(".messageview").on("click",function(){var a="process=10&data="+$(this).attr("data-message");$.ajax({type:"POST",url:"postpub",data:a,dataType:"json",beforeSend:function(){$("#myModalLabel").text("");$(".modal-body").html("")},success:function(a){$("#myModalLabel").html(a.asunto);$(".modal-body").html(a.message);$("#ReadMessagesModal").modal("show");if(1==a.read){var c=$(".messagesnoread").text(),c=parseInt(c)-1;1>c?$(".messagesnoread").hide():$(".messagesnoread").text(c);$("span#new-message-"+a.leido).hide()}},error:function(){}})});$(".deletemessage").on("click",function(){var a="process=11&data="+$(this).attr("data-message");$(this).prop("disabled",!0);var b=$(this).parent().parent();$.ajax({type:"POST",url:"postpub",data:a,success:function(a){b.addClass("animated fadeOutLeft").fadeOut()},error:function(){}})});$(".saveprefe").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#changepref");a.validate({rules:{lang:"required",theme:"required"},messages:{lang:messageerror1,theme:messageerror1}});1==a.valid()&&(a="process=2&"+$("#changepref").serialize(),$.ajax({type:"POST",url:"postcomment",data:a,success:function(){$("#updasuccess").fadeIn(500);setTimeout(function(){$("#updasuccess").fadeOut(500)},1500)},error:function(){}}))});$(".saveprefdata1").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#personaldates");a.validate({rules:{nombre:"required",apellidos:"required"},messages:{nombre:messageerror1,apellidos:messageerror1}});1==a.valid()&&(a="process=3&"+$("#personaldates").serialize(),$.ajax({type:"POST",url:"postcomment",data:a,success:function(){$("#updasuccess").fadeIn(500);setTimeout(function(){$("#updasuccess").fadeOut(500)},1500)},error:function(){}}))});$(".changemypass").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#newchangepass");a.validate({rules:{actualpass:"required",newpass:"required",newpassconf:{equalTo:"#newpassequal"}},messages:{actualpass:messageerror4,newpass:messageerror5,newpassconf:messageerror3}});1==a.valid()&&(a="process=4&"+$("#newchangepass").serialize(),$.ajax({type:"POST",url:"postcomment",data:a,success:function(a){1==a?$("#notactualpass").fadeIn():($("#myModalPassword").modal("toggle"),$("#updasuccess").fadeIn(500),setTimeout(function(){$("#updasuccess").fadeOut(500)},1500));$("#newchangepass")[0].reset()},error:function(){}}))});$(".savenewemail").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#emailform");a.validate({rules:{email:{required:!0,email:!0}},messages:{email:messageerror6}});1==a.valid()&&(a="process=5&"+$("#emailform").serialize(),$.ajax({type:"POST",url:"postcomment",data:a,success:function(a){777==a?($("#notactualemail").fadeIn(),$("#emailform")[0].reset()):666==a?($("#notactualusemail").fadeIn(),$("#emailform")[0].reset()):($("#myModalEmail").modal("toggle"),$("#updasuccess").fadeIn(500),setTimeout(function(){$("#updasuccess").fadeOut(500)},1500),$("#emailform")[0].reset(),window.location="logout")},error:function(){}}))});$(".savenewpermalink").on("click",function(){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#permaform");a.validate({rules:{permalink:{required:!0}},messages:{permalink:messageerror7}});1==a.valid()&&(a="process=6&"+$("#permaform").serialize(),$.ajax({type:"POST",url:"postcomment",data:a,success:function(a){1==a?$("#notactualperma").fadeIn():($("#myModalPerma").modal("toggle"),$("#updasuccess").fadeIn(500),setTimeout(function(){$("#updasuccess").fadeOut(500)},1500));$("#permaform")[0].reset()},error:function(){}}))});$(document).on("keydown","#permainput",function(a){if(32==a.keyCode)return!1});$(function(){$('[data-toggle="tooltip"]').tooltip()});$(window).scroll(function(){"undefined"!==typeof initialsau4timeline&&$(window).scrollTop()==$(document).height()-$(window).height()&&(initialsau4timeline++,initialsau4timeline>sautimelinelimit?$("#loadingmoretimeline").hide():loadtimeline())});$(window).scroll(function(){"undefined"!==typeof initialsau4timelineprofile&&$(window).scrollTop()==$(document).height()-$(window).height()&&(initialsau4timelineprofile++,initialsau4timelineprofile>sautimelinelimitprofile?$("#loadingmoretimeline").hide():loadtimelineprofile(datememeber))});function commentsfterbox(c){jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#commentfrm"+c);a.validate({errorElement:"div",errorPlacement:function(b,a){$("div#commenterror"+c).html("");b.appendTo("div#commenterror"+c)},rules:{commentstext:"required"},messages:{commentstext:messageerror2}});1==a.valid()&&(a=$("#commentfrm"+c).serialize(),$.ajax({type:"POST",url:"postcomment",data:"process=1&post="+c+"&"+a,beforeSend:function(){$(".btncommentpost").prop("disabled",!0)},success:function(b){$("#commentfrm"+c)[0].reset();$(".btncommentpost").prop("disabled",!1);$("#comment-box-real-"+c).prepend(b);$(".deletecomment").on("click",function(){var b=$(this).attr("data-comment"),a=$("#time-comment-"+b);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=6&delete="+b,beforeSend:function(){a.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){a.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){a.remove()},2E3)},error:function(){}})})},error:function(){}}))}function showboxafter(c){c=$("#comment-"+c);c.is(":hidden")?c.fadeIn():c.fadeOut()}function loadtimeline(){$.ajax({type:"POST",url:"postpub",data:"process=12&page="+initialsau4timeline,beforeSend:function(){},success:function(c){$("#post-inner:last").append(c);$(".likethis").on("click",function(){var a=$(this).attr("data-like"),b=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=2&like="+a,beforeSend:function(){},success:function(b){},error:function(){}});checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".dontlikethis").on("click",function(){var a=$(this).attr("data-like"),b=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=3&like="+a,beforeSend:function(){},success:function(b){},error:function(){}});checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".deletepost").on("click",function(){var a=$(this).attr("data-post"),b=$("#time-post-"+a);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=5&delete="+a,beforeSend:function(){b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})});$(".deletecomment").on("click",function(){var a=$(this).attr("data-comment"),b=$("#time-comment-"+a);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=6&delete="+a,beforeSend:function(){b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})})},error:function(){}})}function loadtimelineprofile(c){$.ajax({type:"POST",url:"postpub",data:"process=13&page="+initialsau4timelineprofile+"&usuario="+c,beforeSend:function(){},success:function(a){$("#post-inner:last").append(a);$(".likethis").on("click",function(){var b=$(this).attr("data-like"),a=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=2&like="+b,beforeSend:function(){},success:function(b){},error:function(){}});checklikes(b);a.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".dontlikethis").on("click",function(){var b=$(this).attr("data-like"),a=$(this).parent();$.ajax({type:"POST",url:"postpub",data:"process=3&like="+b,beforeSend:function(){},success:function(b){},error:function(){}});checklikes(b);a.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".deletepost").on("click",function(){var b=$(this).attr("data-post"),a=$("#time-post-"+b);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=5&delete="+b,beforeSend:function(){a.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){a.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){a.remove()},2E3)},error:function(){}})});$(".deletecomment").on("click",function(){var b=$(this).attr("data-comment"),a=$("#time-comment-"+b);$(this).addClass("animated zoomOut");$.ajax({type:"POST",url:"postpub",data:"process=6&delete="+b,beforeSend:function(){a.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){a.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){a.remove()},2E3)},error:function(){}})})},error:function(){}})};






$(".metricasbtn").on("click",function(){

	jQuery.validator.setDefaults({debug:!0,success:"valid"});var a=$("#poster");
	
	a.validate({
		rules:{posttext:"required"}
		,messages:{posttext:messageerror1}
	});1==a.valid()&&($("#noposts").hide(),a="process=1&"+$("#poster").serialize(),

		$.ajax({type:"POST",
			url:"postMeetricas",
			data:a,
			beforeSend:function(){
			$(".metricasbtn").prop("disabled",!0)
			},
				success:function(a){
					debugger;
					$("#poster")[0].reset();
					$(".metricasbtn").prop("disabled",!1);
					$("#post-inner").prepend(a);$(".commentthis").on("click",function(){
						var a=$(this).attr("data-comment"),a=$("#comment-"+a);a.is(":visible")?a.fadeOut():a.fadeIn()
					});
					$(".btncommentpost").on("click",function(){
						var a=$(this).attr("data-comment");jQuery.validator.setDefaults({debug:!0,success:"valid"});
						var b=$("#commentfrm"+a);
						b.validate({errorElement:"div",errorPlacement:function(b,d){
							$("div#commenterror"+a).html("");b.appendTo("div#commenterror"+a)
						},rules:{commentstext:"required"},messages:{commentstext:messageerror2}
					});1==b.valid()&&(b=$("#commentfrm"+a).serialize(),
					

					
					$.ajax({
						type:"POST",
						url:"postcomment",
						data:"process=1&post="+a+"&"+b,beforeSend:function(){
							debugger;
						$(".btncommentpost").prop("disabled",!0)},success:function(b){
							$("#commentfrm"+a)[0].reset();$(".btncommentpost").prop("disabled",!1);$("#comment-box-real-"+a).prepend(b);$(".deletecomment").on("click",function(){var a=$(this).attr("data-comment"),b=$("#time-comment-"+a);$(this).addClass("animated zoomOut");

								$.ajax({
									type:"POST",
									url:"postMeetricas",
									data:"process=6&delete="+a,beforeSend:function(){
										b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}
									})})
						},error:function(){

						}}))
					});$(".likethis").on("click",function(){
						var a=$(this).attr("data-like"),b=$(this).parent();
						
						

						$.ajax({
							type:"POST",
							url:"postMeetricas",
							data:"process=2&like="+a,beforeSend:function(){

							},success:function(a){

							},error:function(){}
						});
						checklikes(a);
						b.find("a").removeClass("hidelike");$(this).addClass("hidelike")
					});$(".dontlikethis").on("click",function(){var a=$(this).attr("data-like"),b=$(this).parent();



					$.ajax({type:"POST",url:"postpub",data:"process=3&like="+a,beforeSend:function(){},success:function(a){},error:function(){}});checklikes(a);b.find("a").removeClass("hidelike");$(this).addClass("hidelike")});$(".deletepost").on("click",function(){var a=$(this).attr("data-post"),b=$("#time-post-"+a);$(this).addClass("animated zoomOut");


					$.ajax({type:"POST",url:"postpub",data:"process=5&delete="+a,beforeSend:function(){b.prepend('<div id="loaders"><div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div></div>')},success:function(){b.addClass("animated zoomOut").fadeOut(1E3);setTimeout(function(){b.remove()},2E3)},error:function(){}})})
				},error:function(){}})
		)});
