import icon from '../../assets/img/notification-icon.svg';

import './styles.css';
// uma function js com elementos html dentro
function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;
