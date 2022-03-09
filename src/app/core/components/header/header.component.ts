import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'craft-header',
  template: ` <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="absolute inset-y-0 left-0 flex items-center sm:hidden opacity-50"
        >
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-amber-500 hover:border-b-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <button
                class="hover:text-amber-500 text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>

              <button
                class="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>

              <button
                class="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </button>
              <button
                class="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Testimonials
              </button>

              <button
                class="text-gray-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- add mobile menu here -->
      </div>
    </div>
  </nav>`,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}