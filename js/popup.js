let hideAds = true
let adToggle = document.getElementById('adCheckbox')
chrome.storage.sync.get(['yt_hide_overlay_ads'], function (data) {
  hideAds = data.yt_hide_overlay_ads
  setSlider()
})
chrome.storage.onChanged.addListener(storageUpdated)

function storageUpdated (data) {
  if (data.yt_hide_overlay_ads) {
    hideAds = data.yt_hide_overlay_ads.newValue
    setSlider()
  }
}
const trailer = document.getElementById('toggleAdContainer')
trailer.removeEventListener('click', toggleTrailers)
trailer.addEventListener('click', toggleTrailers)
function toggleTrailers (e) {
  e.stopPropagation()
  e.preventDefault()
  chrome.storage.sync.set({ yt_hide_overlay_ads: !hideAds }, function (d) {
  })
}

function setSlider () {
  if (hideAds) adToggle.checked = true
  else adToggle.checked = false
}
