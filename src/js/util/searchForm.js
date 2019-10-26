let searchUrl = new URL(document.location.href).origin;

const searchForm = `<form method='get' id='searchform' action='${ searchUrl }'>
		<label for='s' class='assistive-text'>Search</label>
		<input type='text' class='field' name='s' id='s' placeholder='Search. . .' />
	</form>`;

export default searchForm;
