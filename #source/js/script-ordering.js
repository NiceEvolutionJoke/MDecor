class ItcTabs {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
        const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
        elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
        elLinkTarget.classList.add('tabs__btn_active');
        elPaneTarget.classList.add('tabs__pane_show');
        this._elTabs.dispatchEvent(this._eventShow);
        elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}

// инициализация .tabs как табов
new ItcTabs('.ordering-ordering__tabs');

const btnsRadio = document.querySelectorAll('.ordering-ordering__radio');
for (let i = 0; i < btnsRadio.length; i++) {
    btnsRadio[i].addEventListener('click', () => {
        for (let j = 0; j < btnsRadio.length; j++) {
            btnsRadio[j].classList.remove('active');
        };
        btnsRadio[i].classList.add('active');
    });
};
document.querySelector('.btn1').addEventListener('click', () => {
    document.querySelector('.ordering-ordering__inputs-block').classList.add('active');
});
document.querySelector('.btn2').addEventListener('click', () => {
    document.querySelector('.ordering-ordering__inputs-block').classList.remove('active');
});

const selectSingle = document.querySelectorAll('.__select');

// Toggle menu
for (let k = 0; k < selectSingle.length; k++) {
    let selectSingle_title = selectSingle[k].querySelector('.__select__title');
    let selectSingle_labels = selectSingle[k].querySelectorAll('.__select__label');

    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle[k].getAttribute('data-state')) {
            selectSingle[k].setAttribute('data-state', '');
        } else {
            selectSingle[k].setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {

            selectSingle_title.textContent = evt.target.textContent;
            selectSingle[k].setAttribute('data-state', '');
        });
    }
}

const payBtns = document.querySelectorAll('.payBtn');
for (let i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener('click', () => {
        for (let j = 0; j < payBtns.length; j++) {
            payBtns[j].classList.remove('active');
        }
        payBtns[i].classList.add('active');
    });
};

document.querySelector('.btn-radio-1').addEventListener('click', () => {
    document.querySelector('.ordering-ordering__inputs3').classList.remove('active');
});
document.querySelector('.btn-radio-2').addEventListener('click', () => {
    document.querySelector('.ordering-ordering__inputs3').classList.add('active');
});


document.querySelector('.ordering__btn-m').addEventListener('click', () => {
    document.querySelector('.ordering-order__mobile-body').classList.add('active');
});
document.querySelector('.ordering-order__mobile-body-close').addEventListener('click', () => {
    document.querySelector('.ordering-order__mobile-body').classList.remove('active');
});
