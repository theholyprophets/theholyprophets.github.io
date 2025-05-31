---
layout: page
title: Prophets
description: Discover all the prophets of Islam, their stories, and teachings.
hero: true
---

<!-- Search and Filters -->
<div class="mb-12">
    <div class="max-w-2xl mx-auto mb-8">
        <div class="relative">
            <input 
                type="text" 
                id="search-input" 
                placeholder="Search prophets..." 
                class="w-full px-6 py-4 pl-12 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg"
            >
            <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </div>
    </div>
    
    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button class="filter-btn active" data-filter="all">All Prophets</button>
        <button class="filter-btn" data-filter="major">Major Prophets</button>
        <button class="filter-btn" data-filter="messenger">Messengers</button>
        <button class="filter-btn" data-filter="early">Early Period</button>
        <button class="filter-btn" data-filter="late">Later Period</button>
    </div>
    
    <!-- View Toggle -->
    <div class="flex justify-center mb-8">
        <div class="bg-gray-100 p-1 rounded-lg">
            <button id="grid-view-btn" class="px-4 py-2 rounded-md bg-white shadow-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
            </button>
            <button id="timeline-view-btn" class="px-4 py-2 rounded-md text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>
        </div>
    </div>
</div>

<!-- Grid View -->
<div id="grid-view" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for prophet in site.prophets %}
    <div class="prophet-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" 
         data-category="{{ prophet.categories | join: ' ' }}" 
         data-name="{{ prophet.title | downcase }}">
        <div class="relative h-64 bg-gradient-to-br {{ prophet.gradient | default: 'from-emerald-500 to-teal-600' }}">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 p-6 text-white">
                <h3 class="text-2xl font-serif mb-2">{{ prophet.title }}</h3>
                {% if prophet.title_arabic %}
                <p class="text-sm opacity-90 mb-2">{{ prophet.title_arabic }}</p>
                {% endif %}
                <p class="text-sm opacity-90 mb-3">{{ prophet.subtitle }}</p>
                {% if prophet.description %}
                <p class="text-xs opacity-80 leading-relaxed">{{ prophet.description | truncate: 100 }}</p>
                {% endif %}
            </div>
            {% if prophet.period %}
            <div class="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {{ prophet.period }}
            </div>
            {% endif %}
        </div>
        <div class="p-6">
            <a href="{{ prophet.url | relative_url }}" class="inline-flex items-center text-emerald-600 font-medium hover:underline">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
    </div>
    {% endfor %}
</div>

<!-- Timeline View -->
<div id="timeline-view" class="hidden">
    <div class="relative">
        <div class="timeline-line h-full top-0"></div>
        {% assign sorted_prophets = site.prophets | sort: 'timeline_order' %}
        {% for prophet in sorted_prophets %}
        <div class="timeline-item{% cycle ' ', ' md:flex-row-reverse' %}">
            <div class="timeline-dot"></div>
            <div class="timeline-content{% cycle ' md:mr-8', ' md:ml-8' %}">
                <div class="bg-gradient-to-r {{ prophet.gradient | default: 'from-emerald-500 to-teal-600' }} p-6 rounded-xl text-white mb-4">
                    <h3 class="text-xl font-serif mb-2">{{ prophet.title }}</h3>
                    {% if prophet.period %}
                    <p class="text-sm opacity-90">{{ prophet.period }}</p>
                    {% endif %}
                </div>
                {% if prophet.description %}
                <p class="text-gray-600 mb-4">{{ prophet.description }}</p>
                {% endif %}
                <a href="{{ prophet.url | relative_url }}" class="text-emerald-600 font-medium hover:underline">Learn More →</a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>