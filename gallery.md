---
layout: page
title: Gallery
description: Beautiful Islamic art and historical sites related to the prophets
hero: true
---

<!-- Gallery Filters -->
<div class="mb-12">
    <div class="flex flex-wrap justify-center gap-3">
        <button class="gallery-filter active bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors" data-filter="all">
            All Images
        </button>
        <button class="gallery-filter bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors" data-filter="architecture">
            Architecture
        </button>
        <button class="gallery-filter bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors" data-filter="calligraphy">
            Calligraphy
        </button>
        <button class="gallery-filter bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors" data-filter="historical">
            Historical Sites
        </button>
        <button class="gallery-filter bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors" data-filter="art">
            Islamic Art
        </button>
    </div>
</div>

<!-- Gallery Grid -->
<div class="gallery-grid">
    {% for item in site.data.gallery %}
    <div class="gallery-item group relative overflow-hidden rounded-xl cursor-pointer" 
         data-category="{{ item.category }}" 
         data-title="{{ item.title }}" 
         data-description="{{ item.description }}">
        <div class="aspect-{% if item.aspect %}{{ item.aspect }}{% else %}square{% endif %} bg-gradient-to-br {{ item.gradient }} hover:scale-105 transition-transform duration-300"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 class="font-medium">{{ item.title }}</h4>
        </div>
    </div>
    {% endfor %}
</div>

<!-- Lightbox -->
<div id="lightbox" class="fixed inset-0 bg-black bg-opacity-80 z-50 hidden items-center justify-center p-4">
    <div id="lightbox-content" class="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-full">
        <div class="relative">
            <div id="lightbox-image" class="w-full h-96"></div>
            <button id="close-lightbox" class="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div class="p-6">
            <h3 id="lightbox-title" class="text-2xl font-serif mb-2"></h3>
            <p id="lightbox-description" class="text-gray-600"></p>
        </div>
    </div>
</div>