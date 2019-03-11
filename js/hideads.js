let hideAds = true

chrome.storage.sync.get(['yt_hide_overlay_ads'], function (result) {
  hideAds = result.yt_hide_overlay_ads
  hideOrShowAds()
})
chrome.storage.onChanged.addListener(sUpdated)
function sUpdated (data) {
  if (data.yt_hide_overlay_ads) {
    hideAds = data.yt_hide_overlay_ads.newValue
    hideOrShowAds()
  }
}
function hideOrShowAds () {
  let css = document.getElementById('hideAdByCSS')
  if (hideAds) {
    if (!css) {
      var link = document.createElement('link')
      link.href = chrome.extension.getURL('css/hide_ads.css')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.id = 'hideAdByCSS'
      document.getElementsByTagName('head')[0].appendChild(link)
    }
  } else {
    if (css) css.remove()
  }
}
