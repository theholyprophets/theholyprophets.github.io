---
layout: page
title: Articles
description: Deep insights into the lives and teachings of the prophets
hero: true
---

<!-- Category Filters -->
<div class="mb-12">
    <div class="flex flex-wrap justify-center gap-3">
        <button class="category-filter active bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors" data-category="all">
            All Articles
        </button>
        {% assign categories = site.articles | map: "category" | uniq %}
        {% for category in categories %}
        <button class="category-filter bg-white text-gray-700 border border-gray-200 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors" data-category="{{ category }}">
            {{ category | capitalize }}
        </button>
        {% endfor %}
    </div>
</div>

<!-- Articles Grid -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for article in site.articles %}
    <article class="article-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300" data-category="{{ article.category }}">
        <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br {{ article.gradient | default: 'from-emerald-400 to-teal-500' }}"></div>
        <div class="p-6">
            <div class="flex items-center mb-3">
                <span class="article-category bg-{{ article.category_color | default: 'emerald' }}-100 text-{{ article.category_color | default: 'emerald' }}-800">
                    {{ article.category | capitalize }}
                </span>
                {% if article.read_time %}
                <span class="text-gray-500 text-sm ml-3">{{ article.read_time }} min read</span>
                {% endif %}
            </div>
            <h3 class="article-title">
                <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
            </h3>
            {% if article.excerpt %}
            <p class="text-gray-600 mb-4">{{ article.excerpt | truncate: 120 }}</p>
            {% endif %}
            <div class="flex items-center justify-between">
                {% if article.date %}
                <span class="text-gray-500 text-sm">{{ article.date | date: "%B %d, %Y" }}</span>
                {% endif %}
                <a href="{{ article.url | relative_url }}" class="text-emerald-600 font-medium hover:underline">Read More</a>
            </div>
        </div>
    </article>
    {% endfor %}
</div>

{% if site.articles.size == 0 %}
<!-- Placeholder content if no articles exist -->
<div class="text-center py-16">
    <h3 class="text-2xl font-serif mb-4">Articles Coming Soon</h3>
    <p class="text-gray-600 mb-8">We're working on bringing you inspiring articles about the prophets.</p>
    <a href="{{ '/' | relative_url }}" class="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
        Return Home
    </a>
</div>
{% endif %}