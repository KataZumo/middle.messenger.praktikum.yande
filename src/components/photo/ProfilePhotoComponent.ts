import Block from "../../tools/Block";

interface ProfilePhotoProps {
    photoUrl: string;
    onClick: () => void;
  }
  
  export default class ProfilePhotoComponent extends Block {
    constructor(props: ProfilePhotoProps) {
      super({
        ...props
    
    });
    }
  
    override render() {
      return `<div class="profile-photo">
        <img src="{{photoUrl}}" alt="Profile Photo" class="profile-photo__image" />
        <button class="profile-photo__button" type="button" onclick="{{onClick}}">Change Photo</button>
      </div>`;
    }
  }
  