export function create_profile(img_src, name, info) {
  const profile = document.createElement('a');
  profile.classList.add('profile');

  profile.innerHTML = `
    <div class="profile-photo">
      <img class="profile photo" src= "${img_src}">
    </div >

    <div class="profile-description">
      <h2>${name}</h2>
      <p>${info}</p>
    </div>`


  return profile;
}