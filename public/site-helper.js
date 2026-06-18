// public/site-helper.js
(function() {
  'use strict';

  var siteUrl = 'https://www.soccer-kaiyunapp.com.cn';
  var keyword = '开云世界杯';

  var dataSeed = '0c1333f396775db2';

  function createCard(title, content, className) {
    var card = document.createElement('div');
    card.className = 'info-card ' + (className || '');
    var h3 = document.createElement('h3');
    h3.textContent = title;
    var p = document.createElement('p');
    p.textContent = content;
    card.appendChild(h3);
    card.appendChild(p);
    return card;
  }

  function createBadge(text, type) {
    var badge = document.createElement('span');
    badge.className = 'keyword-badge badge-' + (type || 'default');
    badge.textContent = text;
    return badge;
  }

  function buildHintPanel() {
    var panel = document.createElement('div');
    panel.id = 'site-helper-panel';

    var header = document.createElement('div');
    header.className = 'helper-header';
    header.textContent = '页面助手';
    panel.appendChild(header);

    var body = document.createElement('div');
    body.className = 'helper-body';

    var tipCard = createCard(
      '提示',
      '欢迎访问本站，您正在浏览 ' + siteUrl + ' 提供的服务。',
      'card-tip'
    );
    body.appendChild(tipCard);

    var noticeCard = createCard(
      '使用说明',
      '本站聚焦 ' + keyword + ' 相关资讯。请使用页面顶部导航浏览不同板块。',
      'card-notice'
    );
    body.appendChild(noticeCard);

    var badgeContainer = document.createElement('div');
    badgeContainer.className = 'badge-container';
    badgeContainer.appendChild(createBadge(keyword, 'primary'));
    badgeContainer.appendChild(createBadge('体育', 'success'));
    badgeContainer.appendChild(createBadge('资讯', 'info'));
    body.appendChild(badgeContainer);

    panel.appendChild(body);
    return panel;
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.textContent =
      '#site-helper-panel {' +
      '  position: fixed; bottom: 20px; right: 20px; z-index: 9999;' +
      '  width: 280px; background: #ffffff; border-radius: 12px;' +
      '  box-shadow: 0 4px 20px rgba(0,0,0,0.15); font-family: Arial, sans-serif;' +
      '  overflow: hidden; transition: transform 0.2s;' +
      '}' +
      '#site-helper-panel:hover { transform: scale(1.02); }' +
      '.helper-header {' +
      '  background: #1e3c72; color: white; padding: 12px 16px;' +
      '  font-size: 16px; font-weight: bold; text-align: center;' +
      '}' +
      '.helper-body { padding: 12px 16px; }' +
      '.info-card { margin-bottom: 10px; }' +
      '.info-card h3 { margin: 0 0 4px 0; font-size: 14px; color: #1e3c72; }' +
      '.info-card p { margin: 0; font-size: 13px; color: #444; line-height: 1.4; }' +
      '.badge-container { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.keyword-badge {' +
      '  display: inline-block; padding: 4px 10px; border-radius: 20px;' +
      '  font-size: 12px; color: white; font-weight: 500;' +
      '}' +
      '.badge-primary { background: #1e3c72; }' +
      '.badge-success { background: #2e7d32; }' +
      '.badge-info { background: #0288d1; }' +
      '.badge-default { background: #757575; }';
    document.head.appendChild(style);
  }

  function init() {
    injectStyles();
    var panel = buildHintPanel();
    document.body.appendChild(panel);
    console.log('[site-helper] 已加载，种子:', dataSeed);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();