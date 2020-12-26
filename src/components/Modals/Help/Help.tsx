import { Alert, Intent } from '@blueprintjs/core';

const Help = () => {
  return (
    <Alert
      // {...alertProps}
      // className={this.props.data.themeName}
      cancelButtonText="Cancel"
      confirmButtonText="Move to Trash"
      icon="trash"
      intent={Intent.DANGER}
      // isOpen={isOpen}
      // onCancel={this.handleMoveCancel}
      // onConfirm={this.handleMoveConfirm}
    >
      <p>
        Are you sure you want to move <b>filename</b> to Trash? You will be able
        to restore it later, but it will become private to you.
      </p>
    </Alert>
  );
};

export default Help;
