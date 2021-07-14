import React from 'react';
import styles from '../stylesheets/About.module.css';

function About(props) {
	return (
		<div className={`container ${styles.container}`}>
			<img alt={"Logo"} src={"https://cdn.discordapp.com/attachments/748589909987557506/849541509887950848/psn.png"} className={styles.logo}/>
			<h1 className={"header text-center"}>
				About us
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam quam non lacus rhoncus posuere. Duis
				tristique faucibus ante. Donec nunc ante, sollicitudin nec faucibus in, hendrerit at neque. Donec rutrum
				malesuada leo, vel semper felis fermentum et. Etiam id nisl nisi. Nulla blandit enim ut elementum pretium.
				Maecenas ullamcorper blandit venenatis. Nullam et varius ante. Nullam scelerisque sodales sem vitae pharetra.

				Pellentesque id aliquam ligula. Praesent vel augue nec purus gravida pretium at ac nisl. Nulla at condimentum
				nibh, quis tempus mi. Curabitur vel accumsan diam, a sagittis nibh. Mauris posuere imperdiet quam, at viverra
				dui vestibulum nec. Sed placerat mi eu turpis accumsan pulvinar. Aenean ac urna et est consectetur sollicitudin.
				Proin congue eget velit ut venenatis. Fusce rutrum, nibh fringilla ornare imperdiet, velit nibh consectetur
				tellus, at tempor enim odio vitae quam. Aenean et facilisis ex. Proin finibus tortor nisi, eu rutrum ipsum
				malesuada sed.

				Quisque dignissim enim cursus, bibendum nisi a, lobortis velit. Mauris commodo vel purus eu viverra. Nullam sed
				est sollicitudin, sodales quam a, placerat libero. Maecenas sit amet ligula fermentum, blandit eros quis, tempus
				nibh. Phasellus non orci vitae nisl pulvinar faucibus eu sed nisi. Ut lobortis arcu enim, id semper sapien
				pulvinar ornare. Nulla facilisi. Vivamus in lorem sit amet sem fermentum tempus. Phasellus id aliquet dui. Sed
				bibendum purus scelerisque facilisis gravida. Aliquam hendrerit ligula et augue vulputate semper. Sed eu quam
				nisi. Donec quis aliquam turpis. Donec in sagittis eros.

				Nam justo erat, lacinia quis varius sit amet, ultrices eu metus. Nullam eros sem, gravida vel pulvinar et,
				scelerisque eget nulla. Donec varius sed diam faucibus sodales. Aenean fermentum leo mi, non sodales diam
				ultricies sit amet. Morbi vestibulum sit amet est sed efficitur. Quisque eu lacus id erat ultrices aliquam.
				Donec a elit consectetur, eleifend neque sit amet, imperdiet erat. Mauris hendrerit, leo vitae porttitor
				vulputate, erat quam tristique arcu, a accumsan lorem enim tempor ligula. In tristique odio est, sit amet
				blandit tortor pulvinar quis. Mauris vitae sodales nunc, a tincidunt leo. In eget purus posuere, elementum lacus
				quis, ultricies ex. Vestibulum mollis vulputate massa, nec scelerisque sapien placerat suscipit. Mauris ut
				lobortis ex, in faucibus massa. Ut vel egestas purus, vel tempus erat. Aenean lacinia hendrerit dolor, et
				efficitur velit tempor vel. Fusce in varius augue, blandit tempor neque.

				Vestibulum non malesuada neque. Suspendisse convallis suscipit neque quis imperdiet. Aliquam quis ligula ipsum.
				Curabitur enim orci, elementum et ante eu, maximus condimentum arcu. Etiam eget metus quis elit auctor lobortis
				ut non quam. Aenean ut blandit ligula, id dictum diam. Sed quis urna non magna fringilla vestibulum sit amet at
				lacus. Vivamus id erat quam. Curabitur tristique, dui eget auctor commodo, ligula arcu malesuada tellus, et
				imperdiet velit arcu non ligula. Vestibulum vel sem mauris. Sed sed velit finibus, condimentum orci ac, aliquet
				lectus. Phasellus euismod turpis non mi tempor, sit amet vestibulum nulla molestie. Quisque in neque nulla.
			</p>
		</div>
	);
}

export default About;