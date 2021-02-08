---
id: freeCodeCamp-Data_Visualization_Projects
title: Data Visualization Projects
---





## Introduction to the Data Visualization Projects

[Data Visualization Projects | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/)

These challenges let you test your data visualization skills and how to transfer and use data using AJAX technologies.

By the end of this, you would have 5 projects to showcase your data visualization skills that you can show off to friends, family, employers, etc. Have fun and remember to use the [Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) method if you get stuck.

-----



## 1. Visualize Data with a Bar Chart

[Data Visualization Projects - Visualize Data with a Bar Chart | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart)

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/GrZVaM.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. You will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required (non-virtual) DOM elements are queried on the moment of each test. If you use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

**User Story #1:** My chart should have a title with a corresponding `id="title"`.

**User Story #2:** My chart should have a `g` element x-axis with a corresponding `id="x-axis"`.

**User Story #3:** My chart should have a `g` element y-axis with a corresponding `id="y-axis"`.

**User Story #4:** Both axes should contain multiple tick labels, each with the corresponding `class="tick"`.

**User Story #5:** My chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.

**User Story #6:** Each bar should have the properties `data-date` and `data-gdp` containing date and GDP values.

**User Story #7:** The bar elements' `data-date` properties should match the order of the provided data.

**User Story #8:** The bar elements' `data-gdp` properties should match the order of the provided data.

**User Story #9:** Each bar element's height should accurately represent the data's corresponding GDP.

**User Story #10:** The `data-date` attribute and its corresponding bar element should align with the corresponding value on the x-axis.

**User Story #11:** The `data-gdp` attribute and its corresponding bar element should align with the corresponding value on the y-axis.

**User Story #12:** I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.

**User Story #13:** My tooltip should have a `data-date` property that corresponds to the `data-date` of the active area.

Here is the dataset you will need to complete this project: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

You can build your project by forking [this CodePen pen](https://codepen.io/freeCodeCamp/pen/MJjpwO). Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Once you're done, submit the URL to your working project with all its tests passing.

<iframe height="600px;" title="FCC: D3 Bar Chart" src="https://codepen.io/freeCodeCamp/full/GrZVaM" >
</iframe>