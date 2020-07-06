// show success notify on click of add machine or products button
// let underline nav item on active

//switching product pages
var updateProducts = document.getElementById('update-products');
var productList = document.getElementById('product-list');
var addProducts = document.getElementById('add-products');

var agreeUpdate = document.getElementById('agree-update');
var addMachineBtn = document.getElementById('add-machine-btn');
var goBack = document.getElementById('go-back');


agreeUpdate.onclick = function() {
    updateProducts.className = "update-machines hide";
    productList.className = "list-of-products grid-view";
}
addMachineBtn.onclick = function() {
    productList.className = "list-of-products grid-view hide";
    addProducts.className = "add-products";
}

goBack.onclick = function() {
    productList.className = "list-of-products grid-view";
    addProducts.className = "add-products hide";
}

// changing from grid-view to column-view and vice-versa
var productsList = document.getElementById('product-list');
var gridBtn = document.getElementById('grid');
var columnBtn = document.getElementById('column');


gridBtn.onclick = function() {
    productsList.className = "list-of-products grid-view";
}
columnBtn.onclick = function() {
    productsList.className = "list-of-products column-view";
}

// delete machine
var delete1 = document.getElementById("delete-1");
var delete1b = document.getElementById("delete-1b");
var delete2 = document.getElementById("delete-2");
var delete2b = document.getElementById("delete-2b");
var delete3 = document.getElementById("delete-3");
var delete3b = document.getElementById("delete-3b");
var delete4 = document.getElementById("delete-4");
var delete4b = document.getElementById("delete-4b");
var delete5 = document.getElementById("delete-5");
var delete5b = document.getElementById("delete-5b");
var delete6 = document.getElementById("delete-6");
var delete6b = document.getElementById("delete-6b");
var delete7 = document.getElementById("delete-7");
var delete7b = document.getElementById("delete-7b");
var delete8 = document.getElementById("delete-8");
var delete8b = document.getElementById("delete-8b");
var deleteParent = document.getElementById('delete-background');
var cancelDelete = document.getElementById('cancel-delete');
var closeDelete = document.getElementById('close-delete');

function showDeleteModal() {
    deleteParent.style.display = "block";
}
function hideDeleteModal() {
    deleteParent.style.display = "none";
}

delete1.onclick = showDeleteModal;
delete1b.onclick = showDeleteModal;
delete2.onclick = showDeleteModal;
delete2b.onclick = showDeleteModal;
delete3.onclick = showDeleteModal;
delete3b.onclick = showDeleteModal;
delete4.onclick = showDeleteModal;
delete4b.onclick = showDeleteModal;
delete5.onclick = showDeleteModal;
delete5b.onclick = showDeleteModal;
delete6.onclick = showDeleteModal;
delete6b.onclick = showDeleteModal;
delete7.onclick = showDeleteModal;
delete7b.onclick = showDeleteModal;
delete8.onclick = showDeleteModal;
delete8b.onclick = showDeleteModal;

cancelDelete.onclick = hideDeleteModal;
closeDelete.onclick = hideDeleteModal;

//show delete notification when delete button is clicked.
var deleletBtn = document.getElementById("delete-btn");
var deleteNotify = document.getElementById('notify-delete');

deleletBtn.onclick = function() {
    setTimeout(function() {
        deleteNotify.style.display = "flex";
    }, 500);
    setTimeout(function() {
        deleteNotify.style.display = "none";
    }, 3000);
    hideDeleteModal();
}


//show details of list of machines
var detailsParent = document.getElementById('details-background');
var details1 = document.getElementById('details-1');
var details1b = document.getElementById('details-1b');
var details2 = document.getElementById('details-2');
var details2b = document.getElementById('details-2b');
var details3 = document.getElementById('details-3');
var details3b = document.getElementById('details-3b');
var details4 = document.getElementById('details-4');
var details4b = document.getElementById('details-4b');
var details5 = document.getElementById('details-5');
var details5b = document.getElementById('details-5b');
var details6 = document.getElementById('details-6');
var details6b = document.getElementById('details-6b');
var details7 = document.getElementById('details-7');
var details7b = document.getElementById('details-7b');
var details8 = document.getElementById('details-8');
var details8b = document.getElementById('details-8b');
var closeIcon = document.getElementById('close-details');

function showDetailsModal() {
    detailsParent.style.display = "block";
}
function hideDetailsModal() {
    detailsParent.style.display = "none";
}
details1.onclick = showDetailsModal;
details1b.onclick = showDetailsModal;
details2.onclick = showDetailsModal;
details2b.onclick = showDetailsModal;
details3.onclick = showDetailsModal;
details3b.onclick = showDetailsModal;
details4.onclick = showDetailsModal;
details4b.onclick = showDetailsModal;
details5.onclick = showDetailsModal;
details5b.onclick = showDetailsModal;
details6.onclick = showDetailsModal;
details6b.onclick = showDetailsModal;
details7.onclick = showDetailsModal;
details7b.onclick = showDetailsModal;
details8.onclick = showDetailsModal;
details8b.onclick = showDetailsModal;

closeIcon.onclick = hideDetailsModal;

// show success notification to adding of product when 'save product' is clicked.
var saveProduct = document.getElementById('save-product');
var addNotify = document.getElementById('notify-add');

saveProduct.onclick = function(e) {
    e.preventDefault();
    setTimeout(function() {
        addNotify.style.display = "flex";
    }, 500);
    setTimeout(function() {
        addNotify.style.display = "none";
    }, 3000);
}