import java.util.Scanner;
class ForEx12
{
	public static void main(String[] args) 
	{
				
		//정수입력을 위한 스캐너 할당
		Scanner scanner = new Scanner(System.in);
		//정수를 입력
		System.out.printf("정수(홀수) : ");
		//입력한 정수가 저장될 변수
		int pushNum = scanner.nextInt();

		//짝수일때, 홀수로 바꾸는 조건문
		if(pushNum % 2 == 0){
			pushNum++;
		}
		System.out.printf("입력한 숫자(변경된 숫자) : %d\n", pushNum);

		// 'A' 는 65
		// 'Z' 는 90 이다.
		char ch = 'A';
		
		//
		int step =2;
		//윗부분 삼각형
		for(int max = 1; max >= 1; max+=step){
			//공백을 그려보자.
			//공백은 (전체 문자수(pushNum) - 출력된 문자수) /2 이다.
			for(int space1 = 1; space1 <= (pushNum - max) / 2; space1++){
				System.out.printf(" ");
			}
			//영어단어를 출력해보자.
			for(int col1 = 1; col1 <= max; col1++){
				System.out.printf("%c",ch);
				ch++;
				if(ch > 'Z'){
					ch = 'A';
				}
			}
			//한줄넘기기
			System.out.printf("\n");

			if(pushNum == max){
				step = -2;
			}

	정진범:“이 편지는 영국에서 최초로 시작되어 일년에 한바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.
 

영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다.

보이루 ㄹ루루루루루
		}
	}
}

