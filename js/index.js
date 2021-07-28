let one = $('#rowOne>td'),
   two = $('#rowTwo>td'),
   three = $('#rowThree>td'),
   four = $('#rowFour>td'),
   five = $('#rowFive>td'),
   six = $('#rowSix>td'),
   seven = $('#rowSeven>td'),
   eight = $('#rowEight>td'),
   nine = $('#rowNine>td'),
   ten = $('#rowTen>td');

let check = () => {
   console.log('Clicked');

   // ONES
   for (let i = 0; i < one.length; i++) {
      if ($(one[i]).find('.num-input').val() === ((i+1) * 1).toString())
         $(one[i]).addClass('table-success');
      else
         $(one[i]).addClass('table-danger');
   }

   // TWO
   for (let i = 0; i < two.length; i++) {
      if ($(two[i]).find('.num-input').val() === ((i+1) * 2).toString())
         $(two[i]).addClass('table-success');
      else
         $(two[i]).addClass('table-danger');
   }

   // THREE
   for (let i = 0; i < two.length; i++) {
      if ($(three[i]).find('.num-input').val() === ((i + 1) * 3).toString())
         $(three[i]).addClass('table-success');
      else
         $(three[i]).addClass('table-danger');
   }

   // FOUR
   for (let i = 0; i < two.length; i++) {
      if ($(four[i]).find('.num-input').val() === ((i + 1) * 4).toString())
         $(four[i]).addClass('table-success');
      else
         $(four[i]).addClass('table-danger');
   }

   // FIVE
   for (let i = 0; i < two.length; i++) {
      if ($(five[i]).find('.num-input').val() === ((i + 1) * 5).toString())
         $(five[i]).addClass('table-success');
      else
         $(five[i]).addClass('table-danger');
   }

   // SIX
   for (let i = 0; i < two.length; i++) {
      if ($(six[i]).find('.num-input').val() === ((i + 1) * 6).toString())
         $(six[i]).addClass('table-success');
      else
         $(six[i]).addClass('table-danger');
   }

   // SEVEN
   for (let i = 0; i < two.length; i++) {
      if ($(seven[i]).find('.num-input').val() === ((i + 1) * 7).toString())
         $(seven[i]).addClass('table-success');
      else
         $(seven[i]).addClass('table-danger');
   }

   // EIGHT
   for (let i = 0; i < two.length; i++) {
      if ($(eight[i]).find('.num-input').val() === ((i + 1) * 8).toString())
         $(eight[i]).addClass('table-success');
      else
         $(eight[i]).addClass('table-danger');
   }

   // NINE
   for (let i = 0; i < two.length; i++) {
      if ($(nine[i]).find('.num-input').val() === ((i + 1) * 9).toString())
         $(nine[i]).addClass('table-success');
      else
         $(nine[i]).addClass('table-danger');
   }

   // TEN
   for (let i = 0; i < two.length; i++) {
      if ($(ten[i]).find('.num-input').val() === ((i + 1) * 10).toString())
         $(ten[i]).addClass('table-success');
      else
         $(ten[i]).addClass('table-danger');
   }
}