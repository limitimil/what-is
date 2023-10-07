import { stringifyWithCircular } from "./utils";

export default function useHookDashboard(title, returnValue) {
    if (typeof document !== 'undefined') {
        const dashboard = document.createElement('div');
        dashboard.style.position = 'fixed';
        dashboard.style.top = '50%';
        dashboard.style.left = '50%';
        dashboard.style.transform = 'translate(-50%, -50%)';
        dashboard.style.zIndex = '9999';
        dashboard.style.backgroundColor = 'white';
        dashboard.style.border = '1px solid black';
        dashboard.style.padding = '10px';
        dashboard.style.maxHeight = '80vh';
        dashboard.style.maxWidth = '80vw';
        dashboard.style.overflow = 'auto';

        const titleElement = document.createElement('h1');
        titleElement.innerText = title;
        dashboard.appendChild(titleElement);

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', () => {
            dashboard.remove();
        });
        dashboard.appendChild(closeButton);

        const content = document.createElement('pre');
        content.innerText = stringifyWithCircular(returnValue);
        dashboard.appendChild(content);

        document.body.appendChild(dashboard);
    }
    return returnValue;
}


