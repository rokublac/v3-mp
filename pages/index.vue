<template>
  <main>
    <div class="bg-black-950">
      <main>
        <div>
          <!-- Hero card -->
          <div class="bg-black-800">
            <div class="relative isolate overflow-hidden pt-14">
              <video autoplay muted loop playsinline
                class="absolute inset-0 -z-10 size-full object-cover mix-blend-multiply">
                <source src="/Users/rokuspace/development/mattepaint/v3-mp/public/videos/main-showcase.mp4"
                  type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="absolute inset-0 bg-gradient-to-t from-black-950/100 to-transparent -z-10" />
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                  <div class="text-center">
                    <h1 class="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl">Unlock your
                      creativity with world-class reference images
                    </h1>
                    <p class="mt-8 text-lg font-regular text-gray-200 sm:text-lg/8 max-w-3xl mx-auto">Join leading
                      studios and talented artists who trust us for the highest-quality reference photography and HDRIs.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                      <button type="button"
                        class="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">See
                        pricing options
                      </button>

                      <a href="https://mattepaint.com/gallery/"
                        target="_blank" rel="noopener noreferrer"
                        class="inline-flex rounded-md bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-primary-200 hover:bg-primary-100">Explore
                        our library</a>
                    </div>
                    <!-- studio social logos -->
                    <div class="mt-20">
                      <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                          class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/blur.png"
                            alt="Transistor" width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/dneg.png"
                            alt="Reform" width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/framestore.png"
                            alt="Tuple" width="158" height="48" />
                          <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/fusefx.png"
                            alt="SavvyCal" width="158" height="48" />
                          <img
                            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/scanline.png"
                            alt="Statamic" width="158" height="48" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-black-950 py-24 mt-48 mb-12 sm:py-0">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="text-center">
                <h2 class="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Fueling the
                  world’s most imaginative films, games, and experiences.
                </h2>
              </div>

              <div class="bg-black-950 py-24 sm:py-0 mt-28">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base/7 text-gray-400">Reference images</dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">500k+
                      </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base/7 text-gray-400">Resolution</dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">50k
                      </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base/7 text-gray-400">Image categories</dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">50+
                      </dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt class="text-base/7 text-gray-400">Color quality</dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">32-bit</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!--industry panels-->
        <div class="bg-black-950 py-24 mb-24 sm:py-0">
          <div class="bg-black-950 py-0 sm:py-0">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                <article
                  class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img src="https://variety.com/wp-content/uploads/2022/03/Dune-VFX.jpg?w=1000&h=563&crop=1" alt=""
                    class="absolute inset-0 -z-10 size-full object-cover">
                  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <h3 class="mt-3 text-3xl/6 font-bold text-white">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      VFX
                    </a>
                  </h3>
                </article>

                <article
                  class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/01/2.jpeg" alt=""
                    class="absolute inset-0 -z-10 size-full object-cover">
                  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <h3 class="mt-3 text-3xl/6 font-bold text-white">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Games
                    </a>
                  </h3>
                </article>

                <article
                  class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img
                    src="https://assets-architectureanddesign-au.s3.ap-southeast-2.amazonaws.com/Infinity-by-Crown-Group.jpg"
                    alt="" class="absolute inset-0 -z-10 size-full object-cover">
                  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <h3 class="mt-3 text-3xl/6 font-bold text-white">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      ArchViz
                    </a>
                  </h3>
                </article>

                <article
                  class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5face19fd1200b5ef885a2fd/f5403604-f3ed-4a55-9fcd-c111979bfd52/WWFest_XRStage13.jpg?format=2500w"
                    alt="" class="absolute inset-0 -z-10 size-full object-cover">
                  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                  <h3 class="mt-3 text-3xl/6 font-bold text-white">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Virtual Production
                    </a>
                  </h3>
                </article>

                <!-- More posts... -->
              </div>
            </div>
          </div>

        </div>


        <!--features/showcase-->
        <div class="overflow-hidden bg-black-950 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">Illuminate
                    your world, without compromise</p>
                  <p class="mt-6 text-lg/8 text-gray-400">Bring your creative vision to life with our 50K-resolution Sky
                    HDRIs, captured at 30-second intervals in full 360-degree panoramas across entire day sequences.
                  </p>
                  <div class="mt-8">
                    <a href="https://mattepaint.com/gallery/hdri/skies/"
                      target="_blank" rel="noopener noreferrer"
                      class="inline-flex rounded-md bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore
                      library &rarr;</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-400">
                    <blockquote class="text-base/7">
                      <p>“MattePaint is pushing the boundaries of HDRI capture with ultra dynamic range and extremely
                        high resolutions.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img src="https://assets-cdn.mattepaint.com/landing/_nuxt/seppsonntag.B45pU5yw.jpg" alt=""
                        class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-200">Sepp Sonntag</span> – Virtual Art Department
                        Supervisor, PIXOMONDO
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <video src="/Users/rokuspace/development/mattepaint/v3-mp/public/videos/hdri-feature-video.mov"
                alt="Product video"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
                width="2432" height="1442" autoplay loop muted playsinline></video>
            </div>
          </div>
        </div>
        <!--feature 2-->
        <div class="overflow-hidden bg-black-950 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:ml-auto lg:pl-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">Cut your
                    search time, fuel the creativity
                  </p>
                  <p class="mt-6 text-lg/8 text-gray-400">Explore a diverse range of high-quality assets, from majestic
                    mountains to vibrant cityscapes, making it easy to find exactly what you need.
                  </p>
                  <div class="mt-8">
                    <a href="https://mattepaint.com/gallery/latest/?page=1"
                      target="_blank" rel="noopener noreferrer"
                      class="inline-flex rounded-md bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore
                      library &rarr;</a>
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-400">
                    <blockquote class="text-base/7">
                      <p>“The service that MattePaint offers is second to none for photo resources for professional
                        Matte Painters and Environment Artists.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img src="https://assets-cdn.mattepaint.com/landing/_nuxt/nickmarshall.w9Gqk6H_.jpg" alt=""
                        class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-200">Nick Marshall</span> – VFX Supervisor, DNEG
                      </div>
                    </figcaption>
                  </figure>

                </div>
              </div>
              <div class="flex items-start justify-end lg:order-first">
                <video src="/Users/rokuspace/development/mattepaint/v3-mp/public/videos/MountainBD02.mov"
                  alt="Product video"
                  class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432"
                  height="1442" autoplay loop muted playsinline></video>
              </div>
            </div>
          </div>
        </div>
        <!--feature 3-->
        <div class="overflow-hidden bg-black-950 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div class="lg:pr-4 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">Create
                    with confidence, deliver without worry
                  </p>
                  <p class="mt-6 text-lg/8 text-gray-400">Our flexible licensing terms ensure you can focus on your
                    creative projects without the worry, giving you peace of mind.

                  </p>
                  <div class="mt-8">
                    <!--<a href="https://mattepaint.com/gallery/latest/?page=1"
                      target="_blank" rel="noopener noreferrer"
                      class="inline-flex rounded-md bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn
                      more &rarr;</a>-->
                  </div>
                  <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-400">
                    <blockquote class="text-base/7">
                      <p>“Matte paint has become critical to my work flow. The quality is second to none and they are
                        constantly updating the library off assets.”</p>
                    </blockquote>
                    <figcaption class="mt-6 flex gap-x-4 text-sm/6">
                      <img src="https://assets-cdn.mattepaint.com/landing/_nuxt/jamesvincent.CjGqhNlc.jpg" alt=""
                        class="size-6 flex-none rounded-full" />
                      <div><span class="font-semibold text-gray-200">James Vincent</span> – Archviz Supervisor
                        Lead</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <img src="~/public/images/home/copyright-shield.jpg" alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432"
                height="1442" />
            </div>
          </div>
        </div>

        <!--customer success-->
        <div class="bg-black-950 mt-28">
          <div class="relative isolate overflow-hidden pt-14">
            <div
              class="absolute inset-0 bg-cover bg-center bg-[url('/Users/rokuspace/development/mattepaint/v3-mp/public/images/home/shogun-showcase.png')] -z-10">
              <div class="absolute inset-0 bg-gradient-to-t from-black-950/100 to-transparent -z-10"></div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                
                
                <div class="text-center">
                  <img class="w-full object-contain max-h-28 mb-6"
                            src="/Users/rokuspace/development/mattepaint/v3-mp/public/images/studio logos/goodbyekansas-group-white.png"
                            alt="Goodbye Kansas Studios" width="158" height="48" />
                  <h1 class="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">See how Goodbye
                    Kansas Studios' built ‘Shōgun’ with MattePaint

                  </h1>
                  <p class="mt-8 text-lg font-regular text-gray-200 sm:text-lg/8 max-w-3xl mx-auto">Goodbye Kansas
                    Studios' took on a significant challenge in creating the visual environments for Disney's Emmy
                    award-winning miniseries, Shōgun, using Mattepaint's assets to create a captivating portrayal of
                    feudal Japan.


                  </p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">


                    <a href="https://mattepaint.com/blog/how-goodbye-kansas-achieved-stunning-visuals-in-shogun-with-mattepaint/"
                      target="_blank" rel="noopener noreferrer"
                      class="inline-flex rounded-md bg-primary-200 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-primary-200 hover:bg-primary-100">
                      Read customer story &rarr; </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!--testimonials
        <section class="bg-orange-500 px-6 py-24 sm:py-32 lg:px-8">
          <figure class="mx-auto max-w-2xl">
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
        </section> -->





        <!--pricing-->
        <form class="group/tiers bg-black-950 py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              <p class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Flexible
                plans for limitless creations
              </p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-regular text-gray-400 sm:text-xl/8">
              Designed for artists and studios—giving you access to premium assets, simple licensing, and more
              time to create.
            </p>
            <div class="mt-16 flex justify-center">
              <fieldset aria-label="Payment frequency">
                <div
                  class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-gray-100">
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-gray-700">
                    <input type="radio" name="frequency" value="monthly" checked
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Monthly</span>
                  </label>
                  <label class="group relative rounded-full px-2.5 py-1 has-[:checked]:bg-gray-700">
                    <input type="radio" name="frequency" value="annually"
                      class="absolute inset-0 appearance-none rounded-full" />
                    <span class="text-white">Annually</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-orange-400 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/personal-icon-pricing.svg" alt="Commercial plan icon" class="w-12 h-12" />
                  </div>
                  <h3 id="tier-freelancer" class="text-3xl/8 font-semibold text-white">Personal</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Designed for solo artists or small studios
                  earning under
                  $100K USD annually. Includes a single-seat personal license with access to high-resolution
                  assets,
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
                  class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$199</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="freelancer" aria-describedby="tier-freelancer"
                  class="mt-8 block w-full rounded-md bg-primary-200 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-blue-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-blue-600 group-data-[featured]/tier:focus-visible:outline-blue-500">View
                  plans</button>
              </div>
              <div
                class="group/tier rounded-3xl p-8 ring-1 ring-white/10 data-[featured]:bg-white/5 data-[featured]:ring-2 data-[featured]:ring-orange-400 xl:p-10">
                <div class="flex flex-col gap-4">
                  <div class="mb-4">
                    <img src="~public/images/commercial-icon-pricing.svg" alt="Commercial plan icon"
                      class="w-12 h-12" />
                  </div>
                  <h3 id="tier-startup" class="text-3xl/8 font-semibold text-white">Commercial</h3>
                </div>
                <p class="mt-4 mb-8 text-sm/6 text-gray-300">Built for companies that need a robust, secure
                  solution for
                  team-based production. Includes single-site licensing, advanced user management, IP-based
                  login
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
                  class="mt-1 flex items-baseline gap-x-1 group-[:not(:has([name=frequency][value=annually]:checked))]/tiers:hidden">
                  <span class="text-4xl font-semibold tracking-tight text-white">$299</span>
                  <span class="text-sm/6 font-semibold text-gray-300">/year</span>
                </p>
                <button type="submit" name="tier" value="startup" aria-describedby="commercial-tier"
                  class="mt-8 block w-full rounded-md bg-primary-200 px-3 py-2 text-center text-sm/6 font-semibold text-white hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-data-[featured]/tier:bg-indigo-500 group-data-[featured]/tier:text-white group-data-[featured]/tier:shadow-sm group-data-[featured]/tier:hover:bg-indigo-400 group-data-[featured]/tier:focus-visible:outline-indigo-500">View
                  plans</button>
              </div>
            </div>
          </div>
        </form>



        <div class="bg-black-950 py-6 sm:py-12">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Behind
                The Magic
              </h2>
            </div>
            <div
              class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <h3 class="mt-3 text-3xl/6 font-bold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    HBO's The Last of Us
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <h3 class="mt-3 text-3xl/6 font-bold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Thor: Ragnarok
                  </a>
                </h3>
              </article>

              <article
                class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg"
                  alt="" class="absolute inset-0 -z-10 size-full object-cover">
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <h3 class="mt-3 text-3xl/6 font-bold text-white">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Dune
                  </a>
                </h3>
              </article>


              <!-- More posts... -->
            </div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-balance text-base font-medium tracking-tight text-gray-400 sm:text-base">See
                more &rarr;
              </h2>
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