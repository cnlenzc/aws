ssh -i .ssh/key-pair-ssh.pem ec2-user@dev.match-cloud.com.br

top -u ec2-user

ps -o pid,%cpu,%mem,command,start,time -p $(pgrep -d, -x node)

ps -o pid,%cpu,%mem,command,start,time ax -p $(pgrep -d, -x node)
ps -o pid,%mem,command ax | grep 'node server'
ps -o pid,user,%mem,command ax | sort -b -k3 -r


