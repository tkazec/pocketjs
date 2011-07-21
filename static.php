<?php
$hash = rawurldecode($_GET['hash']);
$tree = json_decode(file_get_contents('docs.json'), true);
$nav = build($tree);

function build(&$parent, $path = '') {
	$ul = '';
	$path = $path ? $path . '/' : '';
	
	foreach ($parent['kids'] as $name => &$kid) {
		$kpath = $path . $name;
		$ekpath = '#!' . rawurlencode($kpath);
		
		$li = "<a href='{$ekpath}'>{$name}</a>";
		
		if (isset($kid['kids'])) { $li .= build($kid, $path . $name); }
		
		$ul .= "<li>{$li}</li>";
		
		$kid['name'] = $name;
		$kid['path'] = $ekpath;
		$kid['more'] = 'https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/' . preg_replace('/[.#()]/', '', $kpath);
	}
	
	return "<ul>{$ul}</ul>";
}

function html($parent, $item) {
	$header = "<a href='{$item['path']}'>{$item['name']}</a>";
	$desc = $item['desc'];
	$kids = '';
	
	if ($parent) {
		$name = str_replace('()', '', $parent['name']);
		$header = "<a href='{$parent['path']}'>{$name}</a>{$header}";
	}
	
	if (isset($item['kids'])) {
		foreach ($item['kids'] as $kid) {
			$kids .= html($item, $kid);
		}
	}
	
	if (isset($item['unsupported'])) {
		$nosupport = array();
		
		foreach ($item['unsupported'] as $browser => $version) {
			$nosupport []= "{$browser} ≤ {$version}";
		}
		
		$nosupport = implode(', ', $nosupport);
		$desc .= " Not supported in {$nosupport}.";
	}
	
	return "<section><h1>{$header}</h1><p>{$desc} <a href='{$item['more']}'>more</a></p>{$kids}</section>";
}

if ($hash) {
	$path = explode('/', $hash);
	$item = $tree;
	$crumbs = array();
	
	foreach ($path as $part) {
		array_unshift($crumbs, $item = $item['kids'][$part]);
	}
	
	$title = "<a href='{$item['path']}'>{$item['name']}</a>";
	$desc = "{$item['desc']} <a href='{$item['more']}'>more</a>";
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php if ($hash) { echo $title . ' / '; } ?>PocketJS</title>
	</head>
	<body>
		<?php
		if ($hash) {
			echo html(isset($crumbs[1]) ? $crumbs[1] : null, $item);
		} else {
			echo "<h1>PocketJS</h1><p>{$tree['desc']}</p>";
		}
		
		echo "<nav>{$nav}</nav>";
		?>
	</body>
</html>