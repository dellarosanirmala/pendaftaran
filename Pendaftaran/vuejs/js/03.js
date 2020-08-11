var V = new Vue({
    el: "#aplikasi",
    data : {
        newID : '',
        newNama : '',
        newAlamat : '',
        dataSiswa : []
    },
    methods : {
        tambahData : function()
        {
            var nID = this.newID;
            var nNama = this.newNama;
            var nAlamat = this.newAlamat;
            this.dataSiswa.push({id:nID, nama:nNama, alamat:nAlamat});
            this.newID='';
            this.newNama='';
            this.newAlamat='';
        },
        hapusData : function(index)
        {
    this.dataSiswa.splice(index,1);
        }
       
    }
})