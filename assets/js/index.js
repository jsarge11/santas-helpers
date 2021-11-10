const showModal = (id) => {
    document.getElementById(id).style.visibility = 'visible';
}
const hideModal = (id) => {
    document.getElementById(id).style.visibility = 'hidden';
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

