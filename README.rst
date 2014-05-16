Welcome to our HTML-Framework
=============================
This Framework contains the folder structure and "less" source files.


Grid System 12 Columns
----------------------

	.. image:: http://s22.postimg.org/6eq62d3jl/grid.png


Float
----------------
	
	``.float-left``	
	
	``.float-right``  
	
	``.cf``
	
	``.clear``

Text
----------------

	``.text-left`` 
	
	``.text-center``  
	
	``.text-right``   
	
	``.text-justify``
	
Display
-------
	
	``.inline-block()``
		
	``.box-sizing()``
	
Gradients
---------

	``.gradient(@color, @start, @stop)`` 
	
	``.bw-gradient(@color, @start, @stop)``

Border
-------

	``.border-radius(@topright, @bottomright, @bottomleft, @topleft)``
	
	``.bordered(@top-color, @right-color, @bottom-color, @left-color)``

Rounded
-------

	``.rounded(@radius: 2px)``
	
	``.rounded-corners(@tl: 3px, @tr: 3px, @br: 3px, @bl: 3px)``
	
Opacity
-------
	
	``.opacity(@opacity: 0.5)``

Animation
----------

	``.transition-duration(@duration: 0.2s)``
	
	``.rotation(@deg:5deg)``
	
	``.scale(@ratio:1.5)``
	
	``.transition(@transition)``
	
	``.translate(@x:0, @y:0)``

Shadows
-------

	``.drop-shadow(@x-axis: 0, @y-axis: 1px, @blur: 2px, @alpha: 0.1)``
	
	``.inner-shadow(@horizontal:0, @vertical:1px, @blur:2px, @alpha: 0.4)``
	
	``.box-shadow(@arguments)``
	
	``.shadow-gray-alpha()``   
		box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, .3);
	
	``.shadow-black-alpha()``  
		box-shadow: 0 0 5px black;
	
	``.text-shadow(@color: #fff)``
	
	``.shadowed(@shadow)`` 
	
	``.no-text-shadow()``

Fonts
-----

	``.main-font()`` 
	
	``.font-shorthand(@weight: normal, @size: 12px, @lineHeight: 1.2)``
	
	``.font-sans-serif(@weight: normal, @size: 12px, @lineHeight: 1.2)``
	
	``.font-serif(@weight: normal, @size: 12px, @lineHeight: 1.2)``
	
	``.font-monospace(@weight: normal, @size: 12px, @lineHeight: 20px)``
	
	``.font-smoothing()``

Spacing
-------

	``.no-spacing()``
	
	``.spacing()``

Other
-----
	``.columns(@colwidth, @colcount, @colgap, @columnRuleColor, @columnRuleStyle, @columnRuleWidth)``

	``.nobreak()``