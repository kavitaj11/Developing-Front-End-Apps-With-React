const apps = [
  { name: 'myfirstapp', port: 5173 },
  { name: 'todo_list', port: 5174 },
  { name: 'custom_hook', port: 5175 },
  { name: 'feedback_form', port: 5176 },
  { name: 'event_planner', port: 5177 },
  { name: 'conference_event_planner', port: 5178 },
  { name: 'content_rating', port: 5179 },
  { name: 'ecommerce_rtk', port: 5180 },
  { name: 'e-plantShopping', port: 5181 },
];

const appList = document.querySelector('#app-list');
const selectedApp = document.querySelector('#selected-app');
const openDirect = document.querySelector('#open-direct');
const previewFrame = document.querySelector('#preview-frame');

const setActiveApp = (app, button) => {
  document.querySelectorAll('.app-btn').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');

  const url = `http://localhost:${app.port}`;
  selectedApp.textContent = `${app.name} (${url})`;
  openDirect.href = url;
  previewFrame.src = url;
};

const checkStatus = async (app, statusNode) => {
  const url = `http://localhost:${app.port}`;

  try {
    await fetch(url, { mode: 'no-cors' });
    statusNode.textContent = 'reachable';
    statusNode.classList.add('up');
    statusNode.classList.remove('down');
  } catch {
    statusNode.textContent = 'not running';
    statusNode.classList.add('down');
    statusNode.classList.remove('up');
  }
};

apps.forEach((app) => {
  const item = document.createElement('li');
  const button = document.createElement('button');
  const statusNode = document.createElement('span');

  button.type = 'button';
  button.className = 'app-btn';
  button.textContent = `${app.name} (:${app.port})`;

  statusNode.className = 'status';
  statusNode.textContent = 'checking...';

  button.appendChild(statusNode);
  button.addEventListener('click', () => setActiveApp(app, button));

  item.appendChild(button);
  appList.appendChild(item);

  checkStatus(app, statusNode);
});
