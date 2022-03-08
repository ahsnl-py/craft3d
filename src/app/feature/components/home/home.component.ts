import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'craft-home',
  template: `
    <div
      [@slideDownUp]
      class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center "
    >
      <div
        class="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden mx-36
        "
      >
        <h1
          class="my-4 text-3xl md:text-5xl text-amber-500 font-bold leading-normal text-center md:text-left slide-in-bottom-h1"
        >
          Main Message of our business goes here
        </h1>
        <p
          class="py-5 leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-white "
        >
          Sub-message goes here
        </p>
        <div
          class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in space-x-4"
        >
          <button
            class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-full focus:shadow-outline hover:bg-indigo-500"
          >
            Learn More
          </button>
          <button
            class="h-10 px-5 text-indigo-100  border-2 border-indigo-600 hover:border-indigo-500 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-500"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div class=" w-100">I AM A PICTURE with no background</div>
    </div>
  `,
  animations: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
