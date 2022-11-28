
/* 个性化设置 */
window.onload = shySettings();

function shySettings() {
	/* 隐藏主页中间标题 */
	var siteTitle = document.getElementById('site-title');
	siteTitle.style.display = "none";
	
	/* 将主页中间副标题字号设置为h1*/
	var subTitle = document.getElementById('subtitle');
	subTitle.style.fontSize ="32px";
}
