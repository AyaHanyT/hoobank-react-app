import React from 'react';
import { clients} from '../constants';
import styles from '../styles';

const Clients = () => (
  <section className={`my-4 ${styles.flexCenter}`}>
    <div className={`w-full flex-wrap ${styles.flexCenter}`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w[120px]`}>
          <img src={client.logo} className='sm-w-[192px] w-[100px] object-contain'/>
        </div>
      )
      )}
    </div>
  </section>
)

export default Clients
