<template>
  <main>
    <div class="bg-background">
      <main>
        <div>
          <!-- Hero card -->
          <div class="bg-gray-900">


            <div class="relative isolate overflow-hidden pt-14">
              <img
                src="~/public/images/home/skyscraper.jpeg"
                alt="" class="absolute inset-0 -z-10 size-full object-cover" />
              <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div
                  class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
              </div>
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                      class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                      Announcing our next round of funding. <a href="#" class="font-semibold text-white"><span
                          class="absolute inset-0" aria-hidden="true"></span>Read more <span
                          aria-hidden="true">&rarr;</span></a>
                    </div>
                  </div>
                  <div class="text-center">
                    <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">Data to enrich
                      your online business</h1>
                    <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">Anim aute id magna aliqua
                      ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                      occaecat.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                      <a href="#"
                        class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get
                        started</a>
                      <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span
                          aria-hidden="true">→</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div
                  class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
              </div>
            </div>
          </div>



          <!-- Logo cloud -->
          <div class="bg-background-medium">
            <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <p class="text-center text-base font-semibold text-gray-500">Trusted by over 5 very average small
                businesses</p>
              <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit">
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor">
                </div>
                <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img class="h-12" src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- More main page content here... -->

        <!-- Tab content -->
        <div>
          <div class="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:hidden">
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select aria-label="Select a tab"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                <option>My Account</option>
                <option>Company</option>
                <option selected>Team Members</option>
                <option>Billing</option>
              </select>
              <svg
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs">
                  <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">My
                    Account</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Company</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-indigo-500 px-1 py-4 text-center text-sm font-medium text-indigo-600"
                    aria-current="page">Team Members</a>
                  <a href="#"
                    class="w-1/4 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Billing</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <!-- tab content-->

        <div class="overflow-hidden bg-background py-24 sm:py-32">
          <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-accent-primary">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-300 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                            clip-rule="evenodd" />
                        </svg>
                        Push to deploy.
                      </dt>
                      <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                        </svg>
                        SSL certificates.
                      </dt>
                      <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path
                            d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                          <path fill-rule="evenodd"
                            d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                            clip-rule="evenodd" />
                        </svg>
                        Database backups.
                      </dt>
                      <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                        morbi lobortis.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="sm:px-6 lg:px-0">
                <div
                  class="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                  <div
                    class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                    aria-hidden="true"></div>
                  <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                    <img src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                      alt="Product screenshot" width="2432" height="1442"
                      class="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10">
                  </div>
                  <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                    aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--features/showcase-->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <div class="mt-8">
                    <a href="#"
                      class="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                    <blockquote class="text-base/7">
                      <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper
                        ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                        enim tristique.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="" class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                width="2432" height="1442" />
            </div>
          </div>
        </div>
        <!--feature -->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:ml-auto lg:pl-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                            clip-rule="evenodd" />
                        </svg>
                        Push to deploy.
                      </dt>
                      <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                        perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                            clip-rule="evenodd" />
                        </svg>
                        SSL certificates.
                      </dt>
                      <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo.</dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900">
                        <svg class="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path
                            d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                          <path fill-rule="evenodd"
                            d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                            clip-rule="evenodd" />
                        </svg>
                        Database backups.
                      </dt>
                      <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                        morbi lobortis.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="flex items-start justify-end lg:order-first">
                <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                  alt="Product screenshot"
                  class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432"
                  height="1442" />
              </div>
            </div>
          </div>
        </div>
        <!--feature 3-->
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
                  <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better
                    workflow</p>
                  <p class="mt-6 text-lg/8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  <div class="mt-8">
                    <a href="#"
                      class="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                      started</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                    <blockquote class="text-base/7">
                      <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper
                        ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat
                        enim tristique.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="" class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-900">Maria Hill</span> – Marketing Manager</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                width="2432" height="1442" />
            </div>
          </div>
        </div>






        <!--pricing-->
        <form class="group/tiers bg-gray-900 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              <h2 class="text-base/7 font-semibold text-indigo-400">Pricing</h2>
              <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Pricing that
                grows with you</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
              Choose an affordable plan that’s packed with the best features for engaging your audience, creating
              customer loyalty, and driving sales.</p>
            <div class="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <div
                  class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-500">
                    <input type="radio" name="frequency" value="monthly" checked
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Monthly</span>
                  </label>
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-indigo-500">
                    <input type="radio" name="frequency" value="annually"
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Annually</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-indigo-500 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/personal-icon-pricing.svg" alt="Commercial plan icon" class="w-12 h-12" />
                  </div>
                  <h3 id="tier-freelancer" class="text-3xl/8 font-semibold text-white">Personal</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Designed for solo artists or small studios earning under
                  $100K USD annually. Includes a single-seat personal license with access to high-resolution assets,
                  flexible credit usage, and support for JPG and RAW formats.
                </p>
                <p class="mt-4 text-sm/6 text-gray-300">From
                </p>
                <p
                  class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=monthly]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$19</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/month</span>
                </p>
                <p
                  class="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$199</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="freelancer" aria-describedby="tier-freelancer"
                  class="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">Buy
                  plan</button>
              </div>
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-indigo-500 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/commercial-icon-pricing.svg" alt="Commercial plan icon"
                      class="w-12 h-12" />
                  </div>
                  <h3 id="tier-startup" class="text-3xl/8 font-semibold text-white">Commercial</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Built for companies that need a robust, secure solution for
                  team-based production. Includes single-site licensing, advanced user management, IP-based login
                  controls, and access to high-resolution assets in multiple formats.
                </p>
                <p class="mt-4 text-sm/6 text-gray-300">From
                </p>
                <p
                  class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=monthly]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$29</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/month</span>
                </p>
                <p
                  class="mt-6 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$299</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="startup" aria-describedby="tier-startup"
                  class="mt-6 block w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">Buy
                  plan</button>
              </div>
            </div>
          </div>
        </form>


        <!--testimonials-->
        <section class="bg-background px-6 py-24 sm:py-32 lg:px-8">
          <figure class="mx-auto max-w-2xl">
            <p class="sr-only">5 out of 5 stars</p>
            <div class="flex gap-x-1 text-indigo-600">
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
              <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <blockquote class="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
              <p>“Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id
                minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet
                officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="size-12 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                alt="" />
              <div class="text-sm/6">
                <div class="font-semibold text-gray-900">Judith Black</div>
                <div class="mt-0.5 text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </section>



        <!--blog-->
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog
              </h2>
              <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <div
              class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
                  <div class="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" class="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div class="flex gap-x-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" class="size-6 flex-none rounded-full bg-white/10">
                      Michael Foster
                    </div>
                  </div>
                </div>
                <h3 class="mt-3 text-lg/6 font-semibold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
              </article>

              <!-- More posts... -->
            </div>
          </div>
        </div>






      </main>
    </div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// Account data
const account = ref({
  name: 'John Doe',
  email: 'john@example.com',
  password: '',
  timezone: 'UTC+10'
})

// Company data
const company = ref({
  name: 'Tech Solutions Inc.',
  address: '123 Tech Street, Sydney, NSW',
  industry: 'tech',
  darkMode: true
})

// Team members
const teamMembers = ref([
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    initials: 'JS'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Developer',
    initials: 'MJ'
  }
])

// New team member
const newTeamMember = ref({
  name: ''
})

// Billing data
const billing = ref({
  plan: 'Professional',
  price: 99,
  paymentMethod: {
    type: 'C',
    card: '**** **** **** 1234',
    expiry: '12/26'
  }
})

// Computed next payment date
const nextPaymentDate = computed(() => {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  return date.toLocaleDateString()
})

// Methods
const saveAccount = () => {
  // Save account data logic here
  console.log('Saving account:', account.value)
}

const saveCompany = () => {
  // Save company data logic here
  console.log('Saving company:', company.value)
}

const addTeamMember = () => {
  if (newTeamMember.value.name.trim()) {
    const initials = newTeamMember.value.name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()

    teamMembers.value.push({
      id: Date.now(),
      name: newTeamMember.value.name,
      role: 'New Member',
      initials
    })

    newTeamMember.value.name = ''
  }
}

const editMember = (member) => {
  // Edit member logic here
  console.log('Editing member:', member)
}

const removeMember = (member) => {
  // Remove member logic here
  const index = teamMembers.value.findIndex(m => m.id === member.id)
  if (index > -1) {
    teamMembers.value.splice(index, 1)
  }
}

const addPaymentMethod = () => {
  // Add payment method logic here
  console.log('Adding payment method')
}

const changePlan = () => {
  // Change plan logic here
  console.log('Changing plan')
}

const activeTab = ref('team') // Default to team tab
</script>