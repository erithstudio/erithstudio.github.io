(function(a){'use strict';var b=a.querySelector('#app');b.displayInstalledToast=function(){a.querySelector('platinum-sw-cache').disabled||a.querySelector('#caching-complete').show()},b.toggleDrawer=function(){var c=a.getElementById('paperDrawerPanel');c.narrow?c.togglePanel():(c.classList.toggle('collapsed-menu'),c.classList.contains('collapsed-menu')?(c.shadowRoot.querySelector('iron-selector').querySelector('#main').setAttribute('style','left:0px;'),c.shadowRoot.querySelector('iron-selector').querySelector('#drawer').setAttribute('style','width:64px;')):(c.shadowRoot.querySelector('iron-selector').querySelector('#main').setAttribute('style','left:256px;'),c.shadowRoot.querySelector('iron-selector').querySelector('#drawer').setAttribute('style','width:256px;')))},b.resizeChart=function(){for(var c=a.querySelector('#main').querySelector('pa-pages').shadowRoot.querySelector('#routePage').querySelector('.iron-selected'),d=c.querySelector('*:not(pa-page-title)').shadowRoot.querySelector('*:not(style):not(custom-style)'),e=d.querySelectorAll('pa-widget'),f=0;f<e.length;f++)e[f]._refreshPage();e=d.shadowRoot.querySelector('*:not(style):not(custom-style)').querySelectorAll('pa-widget');for(var f=0;f<e.length;f++)e[f]._refreshPage()},b.scrollPageToTop=function(){var c=a.getElementById('paperDrawerPanel');c.querySelector('#main').shadowRoot.querySelector('#mainContainer').scrollTop=0},b.cols='2',b.location='https://polymer-admin.firebaseio.com',b.signOut=function(){this.$.data.signOut()},b.signIn=function(){var c=a.querySelector('#data');c.signIn()}})(document);