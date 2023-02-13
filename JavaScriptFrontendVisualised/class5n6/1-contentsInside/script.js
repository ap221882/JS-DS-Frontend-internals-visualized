const container = document.querySelector('div');

//~? DIFFERENCE BETWEEN
// ~^ 1. textContent  ]
// ~^ 2. innerText    ]
// ~^ 3. innerHTML    ]
// ~^ 4. outerHTML    ]

//~> Content Along  with spaces
console.log(container.textContent);
// ~> Content without spaces
console.log(container.innerText);
// ~> Inner content Content with HTML tags -- along with spaces
console.log(container.innerHTML);
// ~> Content with HTML tags including the same tag -- with spaces
console.log(container.outerHTML);
