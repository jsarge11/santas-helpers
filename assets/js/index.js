const showModal = (id) => {
    const el = document.getElementById(id)
    el.style.visibility = 'visible';
    document.getElementById(id).style.opacity = 1;
}
const hideModal = (id) => {
    document.getElementById(id).style.opacity = 0;
    setTimeout(() => {
        document.getElementById(id).style.visibility = 'hidden';
    }, 500)
}

window.onload = () => {
    const ids = ['nominate']
    document.addEventListener('click', e => {
        ids.forEach(item => {
            if (e.path[0].id.includes(item)) {
                hideModal(item);
            }
        })
    })
}

