let data = [{
      "id": 1,
      "description": "Serverless Angular with Firebase Course",
      "longDescription": "Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png",
      "lessonsCount": 10,
      "category": "BEGINNER",
      "seqNo": 4,
      "url": "serverless-angular"
   },
   {
      "id": 2,
      "description": "Angular Core Deep Dive",
      "longDescription": "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      "lessonsCount": 10,
      "category": "BEGINNER",
      "seqNo": 1,
      "url": "angular-core-course"
   },
   {
      "id": 3,
      "description": "RxJs In Practice Course",
      "longDescription": "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
      "category": "BEGINNER",
      "lessonsCount": 10,
      "seqNo": 2,
      "url": "rxjs-course"
   },
   {
      "id": 4,
      "description": "NgRx (with NgRx Data) - The Complete Guide",
      "longDescription": "Learn the modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools.",
      "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png",
      "category": "BEGINNER",
      "lessonsCount": 10,
      "seqNo": 0,
      "url": "ngrx-course"
   },
   {
      "id": 6,
      "description": "Angular Security Course - Web Security Fundamentals",
      "longDescription": "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png",
      "category": "ADVANCED",
      "lessonsCount": 11,
      "seqNo": 7,
      "url": "angular-security-course"
   },
   {
      "id": 7,
      "description": "Angular PWA - Progressive Web Apps Course",
      "longDescription": "Learn Angular Progressive Web Applications, build the future of the Web Today.",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png",
      "category": "ADVANCED",
      "lessonsCount": 8,
      "seqNo": 8,
      "url": "angular-pwa-course"
   },
   {
      "id": 8,
      "description": "Angular Advanced Library Laboratory: Build Your Own Library",
      "longDescription": "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png",
      "category": "ADVANCED",
      "seqNo": 9,
      "url": "angular-advanced-course"
   },
   {
      "id": 9,
      "description": "The Complete Typescript Course",
      "longDescription": "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png",
      "category": "BEGINNER",
      "seqNo": 10,
      "url": "typescript-course"
   },
   {
      "id": 10,
      "description": "Rxjs and Reactive Patterns Angular Architecture Course",
      "longDescription": "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png",
      "category": "BEGINNER",
      "seqNo": 11,
      "url": "rxjs-patterns-course"
   },
   {
      "id": 11,
      "description": "Angular Material Course",
      "longDescription": "Build Applications with the official Angular Widget Library",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
      "category": "BEGINNER",
      "seqNo": 12,
      "url": "angular-material-course"
   },
   {
      "id": 12,
      "description": "Angular Testing Course",
      "longDescription": "In-depth guide to Unit Testing and E2E Testing of Angular Applications",
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png",
      "category": "BEGINNER",
      "seqNo": 6,
      "url": "angular-testing-course",
      "lessonsCount": 10
   }
]

let wrapper = document.querySelector('.cards-wrapper');
let div, divButtons, headingTag, figure, img, paragraph, button, edit, remove;
let input, filter, cardWrapper, courseName, courseNameValue, courseCategory;
let mainContainer, infoList, ulTemplate, liTemplate;

function creatingContainer(description, longDescription, iconUrl, category, lessonsCount) {

   mainContainer = document.createElement('DIV');
   mainContainerAttr = document.createAttribute('class');
   mainContainerAttr.value = 'main-container';
   mainContainer.setAttributeNode(mainContainerAttr);
   wrapper.appendChild(mainContainer);


   //  Направих div, който ще има клас container. В този div ще слагам информацията за всеки курс
   div = document.createElement('DIV');
   divAttr = document.createAttribute('class');
   divAttr.value = 'container';
   div.setAttributeNode(divAttr);
   mainContainer.appendChild(div);

   //  List на container
   infoList = document.createElement('DIV');
   infoListAttr = document.createAttribute('class');
   infoListAttr.value = 'info-list';
   infoList.setAttributeNode(infoListAttr);
   mainContainer.appendChild(infoList);

   // Използвал съм друг вариант за създаване на елемент чрез Template literals ES6
   ulTemplate = `
   <ul class="course-list">
      <li>Description: ${description}</li>
      <li class="category">Category: ${category}</li>
      <li>Lessons: ${lessonsCount}</li>
   </ul>
   `;

   infoList.innerHTML = ulTemplate;

   // h3 tag за името на курса
   headingTag = document.createElement('H3');
   headingTagAttr = document.createAttribute('class');
   headingTagAttr.value = 'course-name';
   headingTag.setAttributeNode(headingTagAttr);
   headingTag.innerHTML = description;
   div.appendChild(headingTag);

   // figure за снимка на курса
   figure = document.createElement('FIGURE');
   figureAttr = document.createAttribute('class');
   figureAttr.value = 'image-course';
   figure.setAttributeNode(figureAttr);
   div.appendChild(figure);
   img = document.createElement('IMG');
   imgAttr = document.createAttribute('src');
   imgAttr.value = iconUrl;
   img.setAttributeNode(imgAttr);
   figure.appendChild(img);

   // p tag за информация на курса
   paragraph = document.createElement('P');
   pargraphAttr = document.createAttribute('class');
   pargraphAttr.value = 'course-info';
   paragraph.setAttributeNode(pargraphAttr);
   paragraph.innerHTML = longDescription;
   div.appendChild(paragraph);

   // buttons & UI elements, които ще са бъдат в div

   // Buttons
   divButtons = document.createElement('DIV');
   divButtonsAttr = document.createAttribute('class');
   divButtonsAttr.value = 'buttons-container';
   divButtons.setAttributeNode(divButtonsAttr);
   div.appendChild(divButtons);

   button = document.createElement('BUTTON');
   buttonAttr = document.createAttribute('class');
   buttonAttr.value = 'btn';
   button.setAttributeNode(buttonAttr);
   button.innerHTML = 'VIEW';
   divButtons.appendChild(button);


   //UI elements
   // Edit button
   edit = document.createElement('I');
   editAttr = document.createAttribute('class');
   editAttr.value = 'fas fa-edit';
   edit.setAttributeNode(editAttr);
   divButtons.appendChild(edit);

   // Remove button
   remove = document.createElement('I');
   removeAttr = document.createAttribute('class');
   removeAttr.value = 'fas fa-trash';
   remove.setAttributeNode(removeAttr);
   divButtons.appendChild(remove);

}

//  Функция за вкарване на текста и картинките в контейнера
function implementingText() {

   for (let i = 0; i < data.length; i++) {
      //  Намирам всички имена, информацията и снимките на курсовете
      let description = data[i].description;
      let longDescription = data[i].longDescription;
      let iconUrl = data[i].iconUrl;
      let category = data[i].category;
      let lessonsCount = data[i].lessonsCount;
      //  Функцията има 3 параметъра, чрез които вкарвам текста и картинките
      creatingContainer(description, longDescription, iconUrl, category, lessonsCount);
   }
}

implementingText();


// Searching courses
function searchCourses() {
   input = document.getElementById('searchField');
   filter = input.value.toLowerCase().trim();
   cardWrapper = document.getElementsByClassName('container');
   ul = document.getElementsByTagName('UL');

   for (let x = 0; x < cardWrapper.length; x++) {
      courseName = cardWrapper[x].getElementsByClassName('course-name')[0];
      li = ul[x].getElementsByClassName('category')[0];
      courseNameValue = courseName.textContent || courseName.innerText;
      categoryValue = li.innerText;
      console.log(categoryValue);

      if (courseNameValue.toLowerCase().indexOf(filter) > -1 || categoryValue.toLowerCase().indexOf(filter) > -1) {
         cardWrapper[x].style.display = 'block';
      } else {
         cardWrapper[x].style.display = 'none';
      } 

      // When search bar is empty
      if (filter == '') {
         cardWrapper[x].style.display = 'none';
      }
   }
}

// Remove container
document.querySelectorAll('.fa-trash').forEach(function(event) {
   let parent = event.closest('.container');

   event.addEventListener('click', function() {
      parent.remove();
   })
})

// Show List
document.querySelectorAll('.btn').forEach(function(event) {
   let parent = event.closest('.main-container');

   event.addEventListener('click', function() {
      parent.querySelector('.info-list').classList.toggle('show');
   })
})
