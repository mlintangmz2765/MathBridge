document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="format"]');
    const options = document.querySelectorAll('.format-option');
    const footer = document.querySelector('.footer');
    let timeout;

    chrome.storage.sync.get(['copyFormat'], (result) => {
        const format = result.copyFormat || 'mathml';
        const radio = document.querySelector(`input[value="${format}"]`);
        if (radio) {
            radio.checked = true;
            radio.closest('.format-option').classList.add('selected');
        }
    });

    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            const radio = opt.querySelector('input[type="radio"]');

            if (e.target !== radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    });

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selectedFormat = e.target.value;

            options.forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.format-option').classList.add('selected');

            chrome.storage.sync.set({ copyFormat: selectedFormat }, () => {
                const status = document.getElementById('status');
                if (status) {
                    status.classList.add('show');
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        status.classList.remove('show');
                    }, 2000);
                }
            });
        });
    });
});
