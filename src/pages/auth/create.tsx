import { Button, Input } from 'antd';
import React, { ChangeEvent, useState } from 'react';

export default function Create() {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const handleCreateAccount = () => {
        console.log(`email :` + email);
        console.log(`password :` + passWord);
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleCreateAccount();
    };
    return (
        <>
            <Input
                placeholder={'이메일을 입력해 주세요'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
                onKeyUp={handleKeyPress}
            />
            <Input.Password
                placeholder={'비밀번호를 입력해 주세요'}
                minLength={8}
                status={
                    passWord.length > 0 && passWord.length < 8
                        ? 'error'
                        : undefined
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassWord(e.target.value)
                }
                onKeyUp={handleKeyPress}
            />
            <Button type={'primary'} onClick={handleCreateAccount}>
                로그인
            </Button>
        </>
    );
}
