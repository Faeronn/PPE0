function showInfos(nb) {
	switch(nb) {
		case 1:
			window.document.getElementById('veilleContent').innerHTML = "Les écrans Quantum Dot (QLED) ont été inventés dans les années 1980 mais à cause des limitations techniques, la technologie n'a pas été utilisée jusqu'à très récemment. Les Quantum Dots sont des nano-cristaux permettant de produire une palette de couleur nette et très fidèle à la réalité  en plus de consommer beaucoup moins que les dalles LCD ou LED.<br><br>Cependant, la durée de vie de ces écrans est limitée à cause des 'brûlures d'écrans' dûes à l'affichage continu et prolongé d'images fixes.<br><br>Source : <a href='https://www.forbes.com/sites/johnarcher/2017/09/19/what-is-qled-and-why-does-it-matter/'>Forbes</a>";
			break;
		case 2:
			window.document.getElementById('veilleContent').innerHTML = "Le nouvel écran 'The Wall' de Samsung utilise la technologie microLED qui consiste en de très nombreuses LED microscopiques formant des pixels individuels. L'avantage du format microLED est le fait qu'il soit extremement plus durable, éconnome et réactif que les écrans traditionnels et vient se placer en tête des potentielles technologies les plus utilisées dans un proche avenir, dans le domaine des smartphones comme dans celui des téléviseurs.<br><br>L'écran de Samsung est en fait constitué de plus panneaux connectés entre eux, permettant de créer n'importe quelle forme de télévision.<br>Source : <a href='https://www.samsung.com/us/business/products/displays/direct-view-led/the-wall/'>Samsung</a>";
			break;
		case 3:
			window.document.getElementById('veilleContent').innerHTML = "L'écran AMOLED (Active-Matrix Organic Light-Emitting, soit Matrice Active à Diodes Electroluminescentes Organiques) est un des descendant direct des écrans OLED, mais pourvus d'une matrice de controle qui permet de controler chaque pixel individuelement afin de fournir une qualité bien supérieure. <br>Garmin avec sa montre Venu parvient à réaliser un exploit technologique en parvenant à affubler sa montre d'un tel écran.<br><br>Source : <a href='https://buy.garmin.com/en-US/US/p/643260'>Garmin</a>";
			break;
		case 4:
			window.document.getElementById('veilleContent').innerHTML = "Le tout récent smartphone de Samsung, le Galaxy Z Flip est un téléphone pliable avec un écran en fibre de verre et une dalle OLED (Organic Light-Emiting Diode). Les écrans OLED de leur nature organique n'ont pas besoin de rétro-éclairage puisqu'ils émettent leur propre lumière. <br>Ainsi, avec cette dalle OLED, il devient possible de rendre l'écran pliable, et le Z Flip est en celà le successeur du Galaxy Fold, un tablette pliable utilisant le même procédé.<br><br>Néanmoins, à cause de leur nature organique, la durée de vie des LED est bien moindre que les écrans conventionnels. Toutefois, la recherche avance et des moyens de rallonger la durée de vie sont en étude.<br>Source : <a href='https://www.samsung.com/us/mobile/galaxy-z-flip/'>Samsung</a>";
			break;
	}
}