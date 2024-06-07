document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let descripsi = parent.querySelector('.descripsi')? parent.querySelector('.descripsi').innerHTML:'Tidak ada informasi yang tersedia';
        

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML=descripsi;
        document.querySelector('.modalHarga').innerHTML=harga;

        const nohp = '6281359189573';
        let pesan = 'https://api.whatsapp.com/send?phone=${nohp}&text=Halo Bang, saya mau pesan produk ini ${gambar}';

        document.querySelector('.btnBeli').href = pesan;
    });
});
