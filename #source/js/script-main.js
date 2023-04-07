/*------------------------------------UI SLIDER-----------------------------------------*/
$(".polzunok-5").slider({
    min: 0,
    max: 5000,
    values: [2000, 3000],
    range: true,
    animate: "fast",
    slide: function (event, ui) {
        $(".polzunok-input-5-left").val(ui.values[0]);
        $(".polzunok-input-5-right").val(ui.values[1]);
    }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function () {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
        opt_left = $(".polzunok-5").slider("option", "min"),
        where_right = $(".polzunok-5").slider("values", 1),
        input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
        opt_right = $(".polzunok-5").slider("option", "max"),
        where_left = $(".polzunok-5").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
        input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
        input_right = 0;
    }
    $(".polzunok-input-5-left").val(input_left);
    $(".polzunok-input-5-right").val(input_right);
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
});

/*------------------------------------OPEN FILTER-----------------------------------------*/
const filterBtns = document.querySelectorAll('.filter-btn');
const filterBlcoks = document.querySelectorAll('.filter-block');

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', () => {
        filterBtns[i].classList.toggle('active');
        filterBlcoks[i].classList.toggle('active');
    });
};

/*------------------------------------ACTIVE/DISABLED FILTER FLOWER-----------------------------------------*/
/* const filterFlowerBtns = document.querySelectorAll('.catalog-filter-flower__item');
for (let i = 0; i < filterFlowerBtns.length; i++) {
    filterFlowerBtns[i].addEventListener('click', () => {
        filterFlowerBtns[i].classList.toggle('active');
    });
}; */
/*------------------------------------ACTIVE/DISABLED FILTER PRICE-----------------------------------------*/
document.querySelector('.catalog-filter__sort').addEventListener('click', () => {
    document.querySelector('.catalog-filter__sort').classList.toggle('active');
});

/*------------------------------------ACTIVE/DISABLED FILTER COLOR-----------------------------------------*/
/* const filterColorBtns = document.querySelectorAll('.catalog-filter-color__item');
for (let i = 0; i < filterColorBtns.length; i++) {
    filterColorBtns[i].addEventListener('click', () => {
        filterColorBtns[i].classList.toggle('active');
    });
}; */
/*------------------------------------ACTIVE/DISABLED FILTER MOBILE-----------------------------------------*/
document.querySelector('.catalog-filter__filter').addEventListener('click', () => {
    document.querySelector('.catalog-filter__body').classList.add('active');
    document.querySelector('body').classList.add('lock');
});
document.querySelector('.catalog-filter-m__back').addEventListener('click', () => {
    document.querySelector('.catalog-filter__body').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

const btnsCategory = document.querySelectorAll(".category-item");
for (let i = 0; i < btnsCategory.length; i++) {
    btnsCategory[i].addEventListener('click', () => {
        for (let j = 0; j < btnsCategory.length; j++) {
            if (btnsCategory[i] != btnsCategory[j]) {
                btnsCategory[j].classList.remove('active');
            }
        };
        btnsCategory[i].classList.toggle('active');
    });
};