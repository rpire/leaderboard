import addNew from './add_new';
import './style.css';

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  const leaderboard = document.getElementById('leaderboard');
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const num = document.querySelectorAll('.item').length;

  addNew(leaderboard, name, score, num);
});