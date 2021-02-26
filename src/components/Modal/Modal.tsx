import React, { useState } from 'react';
import * as S from './Modal.style';
import CloseButton from './CloseButton';
import { DatabaseType } from 'src/services/data_service';
import { AuthServiceType } from 'src/services/auth_service';

type PropType = {
  visible: boolean;
  className: string;
  onClose: () => void;
  closable: boolean;
  uid: string | null;
  databaseService: DatabaseType;
  authService: AuthServiceType;
  notAuthorize: () => void;
};

const Modal: React.FC<PropType> = ({
  visible,
  className,
  onClose,
  closable,
  children,
  uid,
  databaseService,
  authService,
  notAuthorize,
}) => {
  const [characterChange, setCharacterChange] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  const onMaskClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | null
  ) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  const close = () => {
    if (onClose) {
      onClose();
    }
  };

  const changeCharacterClick = () => {
    setCharacterChange((characterChange) => !characterChange);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 6) return;
    setNewUserName(e.target.value);
  };
  const completeChange = () => {
    if (!newUserName) {
      alert('수정할 이름 입력해주세요.');
      return;
    }
    databaseService.changeCharacterName(uid, newUserName);
    onClose();
  };

  const deleteUser = () => {
    const userResponse = window.confirm(
      '다시는 복구할수 없습니다. 정말 삭제하시겠습니까?'
    );
    if (!userResponse) return;
    onClose();
    notAuthorize(); // 사용자 접근 아애막아버리기
    authService.delete();
    // sync함수버리기 sync함수 버리고 dbdelete를해야함.
    databaseService.timeSync(uid)();
    databaseService.dataSync(uid)();
    databaseService.getLoginUserData(uid)();
    databaseService.getUserDatas()();

    databaseService.deleteUser(uid);

    alert('탈퇴 완료되었습니다.');
  };

  return (
    <>
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper
        onClick={onMaskClick}
        className={className}
        tabIndex={-1}
        visible={visible}
      >
        <S.ModalInner tabIndex={0} className="modal-inner">
          {closable && <CloseButton onClick={close} />}
          <S.ModalTitle>{children}</S.ModalTitle>
          <S.ModalUserSection>
            <S.ModalSelectorSection>
              <S.ModalUserBtn btnType="change" onClick={changeCharacterClick}>
                별명 수정
              </S.ModalUserBtn>
              <S.ChangeSection isChange={characterChange}>
                <S.ChangeCharacterInput
                  type="text"
                  placeholder="수정할 별명 입력해주세요"
                  value={newUserName}
                  onChange={changeName}
                />
                <S.CheckBtn onClick={completeChange}>✔</S.CheckBtn>
              </S.ChangeSection>
            </S.ModalSelectorSection>
            <S.ModalSelectorSection>
              <S.ModalUserBtn btnType="delete" onClick={deleteUser}>
                회원 탈퇴
              </S.ModalUserBtn>
            </S.ModalSelectorSection>
          </S.ModalUserSection>
        </S.ModalInner>
      </S.ModalWrapper>
    </>
  );
};

Modal.defaultProps = {
  closable: true,
  visible: false,
};

export default Modal;
