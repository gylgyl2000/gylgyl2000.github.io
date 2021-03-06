---
id: css-tricks-A_Complete_Guide_to_Grid
title: A Complete Guide to Grid
---



#### column-gap row-gap grid-column-gap grid-row-gap

Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

Values:

- **`<line-size>`** – a length value

```css
.container {
  /* standard */
  column-gap: <line-size>;
  row-gap: <line-size>;

  /* old */
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

Example:

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  column-gap: 10px;
  row-gap: 15px;
}
```

![Example of grid-column-gap and grid-row-gap](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg)![Example of grid-column-gap and grid-row-gap](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg)

The gutters are only created *between* the columns/rows, not on the outer edges.

Note: The `grid-` prefix will be removed and `grid-column-gap` and `grid-row-gap` renamed to `column-gap` and `row-gap`. The unprefixed properties are already supported in Chrome 68+, Safari 11.2 Release 50+ and Opera 54+.

#### gap grid-gap

A shorthand for `row-gap` and `column-gap`

Values:

- **`<grid-row-gap>` `<grid-column-gap>`** – length values

```css
.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

Example:

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  gap: 15px 10px;
}
```

If no `row-gap` is specified, it’s set to the same value as `column-gap`

**Note**: The `grid-` prefix is deprecated (but who knows, may never actually be removed from browsers). Essentially `grid-gap` renamed to `gap`. The unprefixed property is already supported in Chrome 68+, Safari 11.2 Release 50+, and Opera 54+.

#### justify-items

Aligns grid items along the *inline (row)* axis (as opposed to `align-items` which aligns along the *block (column)* axis). This value applies to all grid items inside the container.

Values:

- **start** – aligns items to be flush with the start edge of their cell
- **end** – aligns items to be flush with the end edge of their cell
- **center** – aligns items in the center of their cell
- **stretch** – fills the whole width of the cell (this is the default)

```css
.container {
  justify-items: start | end | center | stretch;
}
```

Examples:

```css
.container {
  justify-items: start;
}
```

![Example of justify-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg)![Example of justify-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-start.svg)

```css
.container {
  justify-items: end;
}
```

![Example of justify-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg)![Example of justify-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-end.svg)

```css
.container {
  justify-items: center;
}
```

![Example of justify-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg)![Example of justify-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-center.svg)

```css
.container {
  justify-items: stretch;
}
```

![Example of justify-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg)![Example of justify-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-items-stretch.svg)

This behavior can also be set on individual grid items via the `justify-self` property.

#### align-items

Aligns grid items along the *block (column)* axis (as opposed to `justify-items` which aligns along the *inline (row)* axis). This value applies to all grid items inside the container.

Values:

- **start** – aligns items to be flush with the start edge of their cell
- **end** – aligns items to be flush with the end edge of their cell
- **center** – aligns items in the center of their cell
- **stretch** – fills the whole height of the cell (this is the default)

```css
.container {
  align-items: start | end | center | stretch;
}
```

Examples:

```css
.container {
  align-items: start;
}
```

![Example of align-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-items-start.svg)![Example of align-items set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-items-start.svg)

```css
.container {
  align-items: end;
}
```

![Example of align-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg)![Example of align-items set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-items-end.svg)

```css
.container {
  align-items: center;
}
```

![Example of align-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg)![Example of align-items set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-items-center.svg)

```css
.container {
  align-items: stretch;
}
```

![Example of align-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-items-stretch.svg)![Example of align-items set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-items-stretch.svg)

This behavior can also be set on individual grid items via the `align-self` property.

#### place-items

`place-items` sets both the `align-items` and `justify-items` properties in a single declaration.

Values:

- **`<align-items>` / `<justify-items>`** – The first value sets `align-items`, the second value `justify-items`. If the second value is omitted, the first value is assigned to both properties.

All major browsers except Edge support the `place-items` shorthand property.

For more details, see [align-items](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-items) and [justify-items](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items).

#### justify-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *inline (row)* axis (as opposed to `align-content` which aligns the grid along the *block (column)* axis).

Values:

- **start** – aligns the grid to be flush with the start edge of the grid container
- **end** – aligns the grid to be flush with the end edge of the grid container
- **center** – aligns the grid in the center of the grid container
- **stretch** – resizes the grid items to allow the grid to fill the full width of the grid container
- **space-around** – places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** – places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** – places an even amount of space between each grid item, including the far ends

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```

Examples:

```html
.container {
  justify-content: start;
}
```

![Example of justify-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-start.svg)![Example of justify-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-start.svg)

```css
.container {
  justify-content: end;    
}
```

![Example of justify-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg)![Example of justify-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-end.svg)

```css
.container {
  justify-content: center;    
}
```

![Example of justify-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg)![Example of justify-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-center.svg)

```css
.container {
  justify-content: stretch;    
}
```

![Example of justify-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-stretch.svg)![Example of justify-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-stretch.svg)

```css
.container {
  justify-content: space-around;    
}
```

![Example of justify-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg)![Example of justify-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-around.svg)

```css
.container {
  justify-content: space-between;    
}
```

![Example of justify-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg)![Example of justify-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-between.svg)

```css
.container {
  justify-content: space-evenly;    
}
```

![Example of justify-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-evenly.svg)![Example of justify-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/justify-content-space-evenly.svg)

#### align-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like `px`. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the *block (column)* axis (as opposed to `justify-content` which aligns the grid along the *inline (row)* axis).

Values:

- **start** – aligns the grid to be flush with the start edge of the grid container
- **end** – aligns the grid to be flush with the end edge of the grid container
- **center** – aligns the grid in the center of the grid container
- **stretch** – resizes the grid items to allow the grid to fill the full height of the grid container
- **space-around** – places an even amount of space between each grid item, with half-sized spaces on the far ends
- **space-between** – places an even amount of space between each grid item, with no space at the far ends
- **space-evenly** – places an even amount of space between each grid item, including the far ends

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
```

Examples:

```css
.container {
  align-content: start;    
}
```

![Example of align-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-content-start.svg)![Example of align-content set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-content-start.svg)

```css
.container {
  align-content: end;    
}
```

![Example of align-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-content-end.svg)![Example of align-content set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-content-end.svg)

```css
.container {
  align-content: center;    
}
```

![Example of align-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg)![Example of align-content set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-content-center.svg)

```css
.container {
  align-content: stretch;    
}
```

![Example of align-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-content-stretch.svg)![Example of align-content set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-content-stretch.svg)

```css
.container {
  align-content: space-around;    
}
```

![Example of align-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg)![Example of align-content set to space-around](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-around.svg)

```css
.container {
  align-content: space-between;    
}
```

![Example of align-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-between.svg)![Example of align-content set to space-between](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-between.svg)

```css
.container {
  align-content: space-evenly;    
}
```

![Example of align-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-evenly.svg)![Example of align-content set to space-evenly](https://css-tricks.com/wp-content/uploads/2018/11/align-content-space-evenly.svg)

#### place-content

`place-content` sets both the `align-content` and `justify-content` properties in a single declaration.

Values:

- **`<align-content>` / `<justify-content>`** – The first value sets `align-content`, the second value `justify-content`. If the second value is omitted, the first value is assigned to both properties.

All major browsers except Edge support the `place-content` shorthand property.

For more details, see [align-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content) and [justify-content](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-content).

#### grid-auto-columns grid-auto-rows

Specifies the size of any auto-generated grid tracks (aka *implicit grid tracks*). Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid. (see [The Difference Between Explicit and Implicit Grids](https://css-tricks.com/difference-explicit-implicit-grids/))

Values:

- **`<track-size>`** – can be a length, a percentage, or a fraction of the free space in the grid (using the `fr` unit)

```css
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```

To illustrate how implicit grid tracks get created, think about this:

```css
.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
}
```

![Example of 2x2 grid](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-01.svg)![Example of 2x2 grid](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-01.svg)

This creates a 2 x 2 grid.

But now imagine you use `grid-column` and `grid-row` to position your grid items like this:

```css
.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
```

![Example of implicit tracks](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-02.svg)![Example of implicit tracks](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-02.svg)

We told .item-b to start on column line 5 and end at column line 6, *but we never defined a column line 5 or 6*. Because we referenced lines that don’t exist, implicit tracks with widths of 0 are created to fill in the gaps. We can use `grid-auto-columns` and `grid-auto-rows` to specify the widths of these implicit tracks:

```css
.container {
  grid-auto-columns: 60px;
}
```

![grid-auto-columns-rows](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-03.svg)![grid-auto-columns-rows](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-columns-rows-03.svg)

#### grid-auto-flow

If you have grid items that you don’t explicitly place on the grid, the *auto-placement algorithm* kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

Values:

- **row** – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
- **column** – tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
- **dense** – tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

```css
.container {
  grid-auto-flow: row | column | row dense | column dense;
}
```

Note that **dense** only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

Examples:

Consider this HTML:

```html
<section class="container">
  <div class="item-a">item-a</div>
  <div class="item-b">item-b</div>
  <div class="item-c">item-c</div>
  <div class="item-d">item-d</div>
  <div class="item-e">item-e</div>
</section>
```

You define a grid with five columns and two rows, and set `grid-auto-flow` to `row` (which is also the default):

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```

When placing the items on the grid, you only specify spots for two of them:

```css
.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```

Because we set `grid-auto-flow` to `row`, our grid will look like this. Notice how the three items we didn’t place (**item-b**, **item-c** and **item-d**) flow across the available rows:

![Example of grid-auto-flow set to row](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-01.svg)![Example of grid-auto-flow set to row](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-01.svg)

If we instead set `grid-auto-flow` to `column`, **item-b**, **item-c** and **item-d** flow down the columns:

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
}
```

![Example of grid-auto-flow set to column](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-02.svg)![Example of grid-auto-flow set to column](https://css-tricks.com/wp-content/uploads/2018/11/grid-auto-flow-02.svg)

#### grid

A shorthand for setting all of the following properties in a single declaration: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow` (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

Values:

- **none** – sets all sub-properties to their initial values.
- **`<grid-template>`** – works the same as the `grid-template` shorthand.
- **`<grid-template-rows>` / [ auto-flow && dense? ] `<grid-auto-columns>`?** – sets `grid-template-rows` to the specified value. If the `auto-flow` keyword is to the right of the slash, it sets `grid-auto-flow` to `column`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `grid-auto-columns` is omitted, it is set to `auto`.
- **[ auto-flow && dense? ] `<grid-auto-rows>`? / `<grid-template-columns>`** – sets `grid-template-columns` to the specified value. If the `auto-flow` keyword is to the left of the slash, it sets `grid-auto-flow` to `row`. If the `dense` keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If `grid-auto-rows` is omitted, it is set to `auto`.

Examples:

The following two code blocks are equivalent:

```css
.container {
  grid: 100px 300px / 3fr 1fr;
}

.container {
  grid-template-rows: 100px 300px;
  grid-template-columns: 3fr 1fr;
}
```

The following two code blocks are equivalent:

```css
.container {
  grid: auto-flow / 200px 1fr;
}

.container {
  grid-auto-flow: row;
  grid-template-columns: 200px 1fr;
}
```

The following two code blocks are equivalent:

```css
.container {
  grid: auto-flow dense 100px / 1fr 2fr;
}

.container {
  grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr;
}
```

And the following two code blocks are equivalent:

```css
.container {
  grid: 100px 300px / auto-flow 200px;
}

.container {
  grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
}
```

It also accepts a more complex but quite handy syntax for setting everything at once. You specify `grid-template-areas`, `grid-template-rows` and `grid-template-columns`, and all the other sub-properties are set to their initial values. What you’re doing is specifying the line names and track sizes inline with their respective grid areas. This is easiest to describe with an example:

```css
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
```

That’s equivalent to this:

```css
.container {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;    
}
```

## Properties for the Children (Grid Items)

**Note:**
`float`, `display: inline-block`, `display: table-cell`, `vertical-align` and `column-*` properties have no effect on a grid item.

#### grid-column-start grid-column-end grid-row-start grid-row-end

Determines a grid item’s location within the grid by referring to specific grid lines. `grid-column-start`/`grid-row-start` is the line where the item begins, and `grid-column-end`/`grid-row-end` is the line where the item ends.

Values:

- **`<line>`** – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
- **span `<number>`** – the item will span across the provided number of grid tracks
- **span `<name>`** – the item will span across until it hits the next line with the provided name
- **auto** – indicates auto-placement, an automatic span, or a default span of one

```css
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}
```

Examples:

```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-01.svg)![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-01.svg)

```css
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}
```

![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-02.svg)![Example of grid-row/column-start/end](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row-start-end-02.svg)

If no `grid-column-end`/`grid-row-end` is declared, the item will span 1 track by default.

Items can overlap each other. You can use `z-index` to control their stacking order.

#### grid-column grid-row

Shorthand for `grid-column-start` + `grid-column-end`, and `grid-row-start` + `grid-row-end`, respectively.

Values:

- **`<start-line>` / `<end-line>`** – each one accepts all the same values as the longhand version, including span

```css
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```

Example:

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

![Example of grid-column/grid-row](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row.svg)![Example of grid-column/grid-row](https://css-tricks.com/wp-content/uploads/2018/11/grid-column-row.svg)

If no end line value is declared, the item will span 1 track by default.

#### grid-area

Gives an item a name so that it can be referenced by a template created with the `grid-template-areas` property. Alternatively, this property can be used as an even shorter shorthand for `grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`.

Values:

- **`<name>`** – a name of your choosing
- **`<row-start>` / `<column-start>` / `<row-end>` / `<column-end>`** – can be numbers or named lines

```css
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

Examples:

As a way to assign a name to the item:

```css
.item-d {
  grid-area: header;
}
```

As the short-shorthand for `grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end`:

```css
.item-d {
  grid-area: 1 / col4-start / last-line / 6;
}
```

![Example of grid-area](https://css-tricks.com/wp-content/uploads/2018/11/grid-area.svg)![Example of grid-area](https://css-tricks.com/wp-content/uploads/2018/11/grid-area.svg)

#### justify-self

Aligns a grid item inside a cell along the *inline (row)* axis (as opposed to `align-self` which aligns along the *block (column)* axis). This value applies to a grid item inside a single cell.

Values:

- **start** – aligns the grid item to be flush with the start edge of the cell
- **end** – aligns the grid item to be flush with the end edge of the cell
- **center** – aligns the grid item in the center of the cell
- **stretch** – fills the whole width of the cell (this is the default)

```css
.item {
  justify-self: start | end | center | stretch;
}
```

Examples:

```css
.item-a {
  justify-self: start;
}
```

![Example of justify-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-start.svg)![Example of justify-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-start.svg)

```css
.item-a {
  justify-self: end;
}
```

![alt="Example](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-end.svg)![alt="Example](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-end.svg)

```css
.item-a {
  justify-self: center;
}
```

![Example of justify-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-center.svg)![Example of justify-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-center.svg)

```css
.item-a {
  justify-self: stretch;
}
```

![Example of justify-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-stretch.svg)![Example of justify-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/justify-self-stretch.svg)

To set alignment for *all* the items in a grid, this behavior can also be set on the grid container via the `justify-items` property.

#### align-self

Aligns a grid item inside a cell along the *block (column)* axis (as opposed to `justify-self` which aligns along the *inline (row)* axis). This value applies to the content inside a single grid item.

Values:

- **start** – aligns the grid item to be flush with the start edge of the cell
- **end** – aligns the grid item to be flush with the end edge of the cell
- **center** – aligns the grid item in the center of the cell
- **stretch** – fills the whole height of the cell (this is the default)

```css
.item {
  align-self: start | end | center | stretch;
}
```

Examples:

```css
.item-a {
  align-self: start;
}
```

![Example of align-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-self-start.svg)![Example of align-self set to start](https://css-tricks.com/wp-content/uploads/2018/11/align-self-start.svg)

```css
.item-a {
  align-self: end;
}
```

![Example of align-self set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-self-end.svg)![Example of align-self set to end](https://css-tricks.com/wp-content/uploads/2018/11/align-self-end.svg)

```css
.item-a {
  align-self: center;
}
```

![Example of align-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-self-center.svg)![Example of align-self set to center](https://css-tricks.com/wp-content/uploads/2018/11/align-self-center.svg)

```css
.item-a {
  align-self: stretch;
}
```

![Example of align-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-self-stretch.svg)![Example of align-self set to stretch](https://css-tricks.com/wp-content/uploads/2018/11/align-self-stretch.svg)

To align *all* the items in a grid, this behavior can also be set on the grid container via the `align-items` property.

#### place-self

`place-self` sets both the `align-self` and `justify-self` properties in a single declaration.

Values:

- **auto** – The “default” alignment for the layout mode.
- **`<align-self>` / `<justify-self>`** – The first value sets `align-self`, the second value `justify-self`. If the second value is omitted, the first value is assigned to both properties.

Examples:

```css
.item-a {
  place-self: center;
}
```

![place self set to center](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center.svg)![place self set to center](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center.svg)

```css
.item-a {
  place-self: center stretch;
}
```

![place set set to center stretch](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center-stretch.svg)![place set set to center stretch](https://css-tricks.com/wp-content/uploads/2018/11/place-self-center-stretch.svg)

All major browsers except Edge support the `place-self` shorthand property.

