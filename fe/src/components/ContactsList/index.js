import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong> 3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vinicius Galli</strong>
              <small>instagram</small>
            </div>
            <span>vinniegalli@gmail.com</span>
            <span>(11) 9999-9999 </span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="edit" /></a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vinicius Galli</strong>
              <small>instagram</small>
            </div>
            <span>vinniegalli@gmail.com</span>
            <span>(11) 9999-9999 </span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="edit" /></a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Vinicius Galli</strong>
              <small>instagram</small>
            </div>
            <span>vinniegalli@gmail.com</span>
            <span>(11) 9999-9999 </span>
          </div>
          <div className="actions">
            <a href="/"><img src={edit} alt="edit" /></a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
