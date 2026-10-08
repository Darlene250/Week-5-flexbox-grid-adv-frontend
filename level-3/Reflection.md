# Reflection: Level 3 - Flexbox vs Grid

## What We Built

For Level 3, we made a blog page called *The Daily Layout*. It has a header, a navigation bar, a left sidebar (20%), the main article (60%), a right sidebar (20%) and a footer. On a tablet, the article takes the full width and the two sidebars sit next to each other below it. On a phone, everything comes one after the other, and the article comes first.

We put the colours and spacing in one shared file, `base.css`. This way, `flexbox-style.css` and `grid-style.css` only have the layout code.

### Which was easier to implement?

Grid was easier for us. With Grid, we just "draw" the page using names:

```css
grid-template:
    "header header header" auto
    "nav    nav    nav"    auto
    "left   main   right"  1fr
    "footer footer footer" auto
    / minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
```

For the tablet, we only changed the drawing to put `"main main"` on top of `"left right"`.

Flexbox needed more thinking. Flexbox works in one direction at a time, so we had to add an extra `<div class="page-body">` to hold the three columns in a row. For the tablet, we used `flex-wrap: wrap` and gave the article `flex-basis: 100%`, so it takes the whole first line and the sidebars go down to the next line. We also used `order: -1` to bring the article before the left sidebar.

### Which required less code?

Grid. The Grid file is mostly three `grid-template` blocks and six short `grid-area` lines. The Flexbox file is almost the same length, but it has more small tricks like `order: -1` and `flex-basis: 100%`.

### Which was more intuitive?

Grid, because the code looks like the page. Flexbox gave us two problems during testing:

1. First, we used `flex: 1 1 0` and `flex: 3 1 0` and we expected 20/60/20. But the columns came out as about 275/730/275px, not 256/768/256px. This is because Flexbox keeps the padding of each column first, and only then shares the space that remains. We fixed it with `flex: 0 0 20%` and `flex: 0 0 60%`.
2. On a tall tablet screen, Grid gave the extra height to the article row (`1fr`), but Flexbox shared it between the two lines. Flexbox cannot give the extra height to only one line, so we used `align-content: space-between` and gave `.page-body` the same background as the article. Now both versions look the same.

We checked both versions at ten screen widths, including both sides of each breakpoint (700/701px and 1024/1025px). They look exactly the same.

### When would we prefer one over the other?

We would use **Grid** for the big structure of a page, where rows and columns must line up and change at different screen sizes. We would use **Flexbox** for small parts that go in one direction, inside those areas. Even in our Grid version, the navigation links use Flexbox in `base.css`, because they are just one row that should wrap on small screens.
