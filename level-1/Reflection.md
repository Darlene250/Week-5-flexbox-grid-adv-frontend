# Reflection: Level 1 - Flexbox vs Grid

## My Experience with the Layouts

For Level 1, I had to build a simple page layout with a header, a main content area, and a footer. I tried doing this using two different CSS tools: Flexbox and CSS Grid. Here is what I noticed while working on them.

### Which was easier to implement?
Honestly, CSS Grid felt easier to use for this kind of page layout. With Grid, I could look at the parent container (the whole page) and just tell it to have three rows: a fixed one for the header, a stretchy one for the main content, and a fixed one for the footer. It was like drawing a quick sketch. 

Flexbox was a bit trickier because I couldn't just tell the parent container everything. I had to go into the styles for the header, main content, and footer individually and tell each of them how to behave and grow. 

### Which required less code?
CSS Grid definitely took less code to set up the main structure. Because Grid let me put all the spacing instructions on the main wrapper, I didn't have to write extra flex rules inside the child elements. Flexbox felt a little more repetitive since I had to add rules in multiple places.

### Which was more intuitive?
Grid made more sense to me for building a full page. Looking at the code `grid-template-rows: 80px 1fr 60px;` is super easy to understand—it literally looks like the layout I want to build. 

Flexbox is great if I just want to line up some buttons or a navigation menu, but for carving out sections of a whole page, Grid felt much more natural and less confusing.

### When to prefer one over the other?
Based on this, I would use **CSS Grid** anytime I need to plan out the "big picture" of a page, like where the sidebars and headers go. I would use **Flexbox** for smaller details inside those boxes, like lining up text next to an image or creating a row of social media icons.
