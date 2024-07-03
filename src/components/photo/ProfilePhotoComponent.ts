import Block from "../../tools/Block";

interface ProfilePhotoProps {
    photoUrl: string;
    onClick: () => void;
  }
  
  export default class ProfilePhotoComponent extends Block {
    constructor(props: ProfilePhotoProps) {
      super({
        ...props,
        events: {
          click: props.onClick
        }
    });
    }
  
    override render() {
      return `<div class="profile-photo">
        <img src="{{photoUrl}}" alt="Profile Photo" class="profile-photo__image" />
      </div>`;
    }
  }
  