## jQuery selectbox plugin v1.0

## Todo
Refactor code. 
Write better support.
Drink coffee.
Even more.

## Requirement
jQuery 1.4+

## Basic usage
Call the function on the select element you want to style.

	$("select").selectbox(); // All select elements.

## Options

	$("select").selectbox({
		callback: function(){} // Callback function, fired when selectbox changes.
	});

## HTML

Nothing special, just a select element.

	<select name="city">
		<option value="">Select city</option>
		<option value="amsterdam">Amsterdam</option>
		<option value="london">London</option>
		<option value="paris">Paris</option>
	</select>

Translates into

	<div class="selectbox sb_1">
		<span>Select city</span>
		<ul style="display: none; ">
			<li>Select city</li>
			<li>Amsterdam</li>
			<li>London</li>
			<li>Paris</li>
		</ul>
	</div>
	
	<select name="city" style="display: none; " id="sb_1">
		<option value="">Select city</option>
		<option value="amsterdam">Amsterdam</option>
		<option value="london">London</option>
		<option value="paris">Paris</option>
	</select>

## CSS

Some basic CSS to begin with.

	.selectbox {
		position: relative;
		border: 1px solid #dbdbdb;
		cursor: pointer;
		padding: 5px 25px 5px 10px;
		background: #efefef url("../img/selectbox.png") no-repeat right center;
	}

	.selectbox ul {
		position: absolute;
		left: -1px;
		top: 32px;
		list-style: none;
		border: 1px solid #dbdbdb;
		width: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.selectbox li {
		cursor: pointer;
		padding: 5px 10px;
	}

	.selectbox li:hover {
		background: #efefef;
	}

**Rob Vermeer**
